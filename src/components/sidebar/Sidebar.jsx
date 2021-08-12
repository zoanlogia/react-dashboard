/** @format */

import React from "react";
import "./sidebar.scss";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <LineStyle className="sidebar__icons" />
              Accueil
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <TrendingUp className="sidebar__icons"/>
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <LineStyle className="sidebar__icons" />
              Accueil
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <TrendingUp className="sidebar__icons"/>
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <LineStyle className="sidebar__icons" />
              Accueil
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <TrendingUp className="sidebar__icons"/>
              Ventes
            </li>
          </ul>
        </div>
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <li className="sidebar__listItem">
              <LineStyle className="sidebar__icons" />
              Accueil
            </li>
            <li className="sidebar__listItem">
              <Timeline className="sidebar__icons"/>
              Analyses
            </li>
            <li className="sidebar__listItem">
              <TrendingUp className="sidebar__icons"/>
              Ventes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
