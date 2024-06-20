import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SceneList.scss";
import { fetchScenes } from "../../../services/sceneService";
import SceneItem from "../SceneItem/SceneItem";

const SceneList = () => {
  const [scenes, setScenes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const scenesData = await fetchScenes();
      setScenes(scenesData);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeFilter = (event) => {
    setSelectedType(event.target.value);
  };

  const handleRoomFilter = (event) => {
    setSelectedRoom(event.target.value);
  };

  const filteredScenes = scenes.filter((scene) => {
    const matchesSearch = scene.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "" || scene.type === selectedType;
    const matchesRoom = selectedRoom === "" || scene.room === selectedRoom;
    return matchesSearch && matchesType && matchesRoom;
  });

  return (
    <div className="scene-list">
      <div className="scene-list-header">
        <input
          type="text"
          placeholder="Search scenes..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="filter-options">
          <select
            value={selectedType}
            onChange={handleTypeFilter}
            className="filter-select"
          >
            <option value="">All Types</option>
            <option value="lighting">Lighting</option>
            <option value="climate">Climate</option>
            <option value="security">Security</option>
          </select>
          <select
            value={selectedRoom}
            onChange={handleRoomFilter}
            className="filter-select"
          >
            <option value="">All Rooms</option>
            <option value="living-room">Living Room</option>
            <option value="bedroom">Bedroom</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>
      </div>
      <div className="scene-list-grid">
        {filteredScenes.map((scene) => (
          <SceneItem key={scene.id} scene={scene} />
        ))}
      </div>
      <Link to="/scenes/add" className="add-scene-button">
        Add Scene
      </Link>
    </div>
  );
};

export default SceneList;
