import React from "react";

import { useState } from "react";

export const Account = () => {
  let [show, setShow] = useState(false);

  return (
    <div id="Account">
      <h1>Account Information</h1>
      <table>
        <tr>
          <td>Balance</td>

          <td>$100,000</td>
        </tr>

        <tr>
          <td>Interest</td>

          <td>%5.0</td>
        </tr>
      </table>
      <p>
        Account Number
        <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      </p>
      {show && <p>11-1234</p>}
    </div>
  );
};

export default Account;
