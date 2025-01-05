import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";

export default class News extends Component {
  static defaultProps = {
    apiKey: "8f3c56e3568c48548cde786e0d687833",
    heading: "Top Headlines...",
    country: "us",
    pageSize: 15,
    category: "general",
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title =
      this.props.category === "general"
        ? "DailyNews - Stay Informed with the latest news"
        : `${this.capitalizeString(this.props.category)} - DailyNews`;
  }

  capitalizeString(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  async fetchArticles() {
    try {
      this.props.setProgress(25);
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      this.props.setProgress(50);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const parsedData = await response.json();
      this.props.setProgress(75);
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      this.setState({ loading: false });
    }
    this.props.setProgress(100);
  }

  async fetchMoreData() {
    try {
      const nextPage = this.state.page + 1;
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }

      const parsedData = await response.json();
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...parsedData.articles],
        page: nextPage,
        totalResults: parsedData.totalResults,
      }));
    } catch (error) {
      console.error("Failed to fetch more articles:", error);
    }
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles.length !== this.state.articles.length) {
      const scrollableDiv = document.querySelector(
        ".infinite-scroll-component"
      );
      if (scrollableDiv) {
        scrollableDiv.scrollTop = scrollableDiv.scrollHeight / 2;
      }
    }
  }

  render() {
    const { articles, loading, totalResults } = this.state;

    return (
      <div className="container my-4" style={{ maxWidth: "95%" }}>
        <h3
          className="text-center mb-4"
          style={{ fontWeight: "bold", color: "#333" }}
        >
          {this.props.heading}
        </h3>
        {loading && (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "200px" }}
          >
            <Loading height="100px" width="110px" />
          </div>
        )}
        {!loading && (
          <InfiniteScroll
            dataLength={articles.length}
            next={() => this.fetchMoreData()}
            hasMore={articles.length < totalResults}
            loader={
              <div className="d-flex justify-content-center my-4">
                <Loading height="75px" width="80px" />
              </div>
            }
          >
            <div className="row gx-4 gy-4">
              {articles.map((elem, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <NewsItem
                    title={elem.title || "No Title Available"}
                    description={elem.description || "No Description Available"}
                    imageURL={
                      elem.urlToImage ||
                      "https://www.hwupgrade.it/i/n/MacBookProM4_720.jpg"
                    }
                    url={elem.url}
                    dated={new Date(elem.publishedAt).toLocaleDateString()}
                    source={elem.source.name}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    );

  }
}
