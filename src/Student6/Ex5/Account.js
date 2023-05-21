import React from "react";

import { useState } from "react";
import { Table } from "./Table";

export const Account = () => {
  let [show, setShow] = useState(false);

  return (
 <div>
    <Table/>
    <p>
          Account Number
          <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
        </p>
        {show && <p>11-1234</p>}
 </div>
  );
};

export default Account;
