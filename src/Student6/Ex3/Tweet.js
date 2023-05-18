import React from "react";


export const Tweet = ({message,color}) => {
  return (
    <div style={{backgroundColor: `${color}`}}>{message}

</div>
  
  );
};

