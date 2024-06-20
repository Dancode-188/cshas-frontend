import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import devicesIcon from "../../assets/devices-icon.svg";
import automationsIcon from "../../assets/automations-icon.svg";
import scenesIcon from "../../assets/scenes-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation ${isOpen ? "open" : ""}`}>
      <div className="navigation-header">
        <button className="navigation-toggle" onClick={toggleMenu}>
          <span className="toggle-icon"></span>
        </button>
      </div>
      <ul className="navigation-menu">
        <li>
          <NavLink
            to="/devices"
            className={({ isActive }) =>
              `navigation-item ${isActive ? "active" : ""}`
            }
          >
            <img src={devicesIcon} alt="Devices" className="navigation-icon" />
            <span className="navigation-text">Devices</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/automations"
            className={({ isActive }) =>
              `navigation-item ${isActive ? "active" : ""}`
            }
          >
            <img
              src={automationsIcon}
              alt="Automations"
              className="navigation-icon"
            />
            <span className="navigation-text">Automations</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/scenes"
            className={({ isActive }) =>
              `navigation-item ${isActive ? "active" : ""}`
            }
          >
            <img src={scenesIcon} alt="Scenes" className="navigation-icon" />
            <span className="navigation-text">Scenes</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `navigation-item ${isActive ? "active" : ""}`
            }
          >
            <img
              src={settingsIcon}
              alt="Settings"
              className="navigation-icon"
            />
            <span className="navigation-text">Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
