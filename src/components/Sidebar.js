import React from "react";
import "../styles/sidebar.css";

import { GrDisc } from "react-icons/gr";
function Sidebar() {
  return (
    // <section class="app">
    <aside class="sidebar">
      <header>Operations</header>
      <nav class="sidebar-nav">
        <ul>
          <li>
            <a href="#">
              <span>Line</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-settings"></i> <span class="">Rectangle</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="ion-ios-briefcase-outline"></i>{" "}
              <span class="">Ellipse</span>
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
              <i class="ion-ios-paper-outline"></i> <span class="">Resize</span>
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
