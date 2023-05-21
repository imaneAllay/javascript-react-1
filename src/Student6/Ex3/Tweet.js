import React from "react";


export const Tweet = ({message,color}) => {
  console.log(message)
  return (
    <div style={{backgroundColor: `${color}`}}>{message}

</div>
  
  );
};

