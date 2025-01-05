import React from "react";

export default function (props) {
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        {capitalize(props.alert.type)}: {props.alert.message}
      </div>
    )
  );
}
