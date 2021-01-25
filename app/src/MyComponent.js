import React from "react";
import { newContextComponents } from "@drizzle/react-components";
import logo from "./logo.png";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CountHouses from "./marketplace/countHouses";
import SellHouse from "./marketplace/SellHouse";
import ShowHouses from "./marketplace/showHouses";

const { AccountData, ContractData, ContractForm } = newContextComponents;
  
export default ({ accounts, drizzle, drizzleState }) => {
  // destructure drizzle and drizzleState from props
  //<ToastContainer />
  return (
    <div className="App">    
      <div className="section">
      <ShowHouses
        drizzle={drizzle}
        drizzleState={drizzleState}
      />
      <CountHouses
        drizzle={drizzle}
        drizzleState={drizzleState}
      />
      <SellHouse
        drizzle={drizzle}
        drizzleState={drizzleState}
      />
      
        <h2>Active Account</h2>
        <AccountData
          drizzle={drizzle}
          drizzleState={drizzleState}
          accountIndex={0}
          units="ether"
          precision={3}
        />
      </div>

      <div className="section">
        <h2>SimpleStorage</h2>
        <p>
          This shows a simple ContractData component with no arguments, along
          with a form to set its value.
        </p>
        <p>
          <strong>Stored Value: </strong>
          <ContractData
            drizzle={drizzle}
            drizzleState={drizzleState}
            contract="SimpleStorage"
            method="storedData"
          />
        </p>
        <ContractForm drizzle={drizzle} contract="SimpleStorage" method="set" />
      </div>
    </div>
  );
};
