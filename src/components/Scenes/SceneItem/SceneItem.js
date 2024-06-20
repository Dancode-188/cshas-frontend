import React from "react";
import { Link } from "react-router-dom";
import "./SceneItem.scss";
import { activateScene, deactivateScene } from "../../../services/sceneService";

const SceneItem = ({ scene }) => {
  const { id, name, description, icon, isActive } = scene;

  const handleActivate = async () => {
    try {
      await activateScene(id);
      // Update the scene state or trigger a re-fetch of scenes
    } catch (error) {
      console.error("Failed to activate scene:", error);
    }
  };

  const handleDeactivate = async () => {
    try {
      await deactivateScene(id);
      // Update the scene state or trigger a re-fetch of scenes
    } catch (error) {
      console.error("Failed to deactivate scene:", error);
    }
  };

  return (
    <div className="scene-item">
      <div className="scene-icon">
        <img src={icon} alt={name} />
      </div>
      <div className="scene-details">
        <h3 className="scene-name">{name}</h3>
        <p className="scene-description">{description}</p>
      </div>
      <div className="scene-actions">
        {isActive ? (
          <button className="deactivate-button" onClick={handleDeactivate}>
            Deactivate
          </button>
        ) : (
          <button className="activate-button" onClick={handleActivate}>
            Activate
          </button>
        )}
        <Link to={`/scenes/edit/${id}`} className="edit-button">
          Edit
        </Link>
      </div>
    </div>
  );
};

export default SceneItem;
