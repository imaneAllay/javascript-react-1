import React from "react";
import "./Main.css";
import { Tweet } from "./Tweet";
import { useState } from "react";

export const Tweets = () => {
  let [number, setNumber] = useState(0);

  const onHandleNumber = () => {
    setNumber(number + 1);

    console.log(number);
  };

  return (
    <div>
      <div className="Main">
        Total Likes: {number}
        <Tweet
          message="It's payday!!!"
          color="green"
          onClicked={onHandleNumber}
        />
        <Tweet
          message="I just bought a new car!"
          color="yellow"
          onClicked={onHandleNumber}
        />
        <Tweet
          message="I just smashed my new car."
          color="red"
          onClicked={onHandleNumber}
        />
        
      </div>
    </div>
  );
};
