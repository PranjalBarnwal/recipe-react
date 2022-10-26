import React from "react";
import './App.css';
function Tweet(props) {
  return (
   
   <div className="tweetBox">
      <h3>{props.name}</h3>
      <p>
        {props.tweet}
      </p>
      <h3>{props.likes}👍</h3>
    </div>
  );
}
export default Tweet;
