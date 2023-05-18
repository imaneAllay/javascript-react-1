import React from "react";

export const Tweet = ({ message, color, onClicked }) => {
  return (
    <div style={{ backgroundColor: `${color}` }}>
      {message}
     
      <button
        onClick={() => {
          onClicked();
        }}
      >
        Like
      </button>
    </div>
  );
};

export default Tweet;
