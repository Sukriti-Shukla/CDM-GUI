import React from "react";
import "../styles/sidebar.css";
import { createContext, useContext, useState } from "react";

import { GrDisc } from "react-icons/gr";
export const UserContext2 = createContext();
function Sidebar() {
  const [operation, setOperation] = useState("");
  const handleClickDelete = () => {
    setOperation("delete");
    console.log(operation);
  };
  return (
    // <section class="app">
    <aside class="sidebar">
      <header>Operations</header>
      <nav class="sidebar-nav">
        <ul>
          <li>
            <a href="#">
              <span>Trim</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-settings"></i> <span class="">Resize</span>
            </a>
          </li>
          <li>
            <a href="#" onClick={handleClickDelete}>
              <i class="ion-ios-briefcase-outline"></i>{" "}
              <span class="">Delete</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-analytics-outline"></i>{" "}
              <span class="">Select/Move</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-paper-outline"></i> <span class="">Reset</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-navigate-outline"></i>{" "}
              <span class="">Export</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-medical-outline"></i> <span class="">Save</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
    // </section>
  );
}

export default Sidebar;
