import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const like = props => {
  return (
    <div>
      <FontAwesomeIcon
        color={props.liked ? "red" : "gray"}
        size="lg"
        icon={faHeart}
        style={{ cursor: "pointer" }}
        onClick={props.onClick}
      ></FontAwesomeIcon>
    </div>
  );
};

export default like;
