import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./EditScene.scss";
import { fetchSceneById, updateScene } from "../../services/sceneService";
import { fetchDevices } from "../../services/deviceService";

const EditScene = () => {
  const history = useHistory();
  const { sceneId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    devices: [],
  });
  const [availableDevices, setAvailableDevices] = useState([]);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sceneData = await fetchSceneById(sceneId);
        const devicesData = await fetchDevices();
        setFormData(sceneData);
        setAvailableDevices(devicesData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch scene and devices:", error);
        history.push("/scenes");
      }
    };

    fetchData();
  }, [sceneId, history]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDeviceToggle = (deviceId) => {
    const deviceIndex = formData.devices.findIndex(
      (device) => device.id === deviceId
    );
    if (deviceIndex !== -1) {
      setFormData({
        ...formData,
        devices: formData.devices.filter((device) => device.id !== deviceId),
      });
    } else {
      const device = availableDevices.find((device) => device.id === deviceId);
      setFormData({
        ...formData,
        devices: [...formData.devices, { id: deviceId, state: device.state }],
      });
    }
  };

  const handleDeviceStateChange = (deviceId, state) => {
    setFormData({
      ...formData,
      devices: formData.devices.map((device) =>
        device.id === deviceId ? { ...device, state } : device
      ),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setIsLoading(true);
      try {
        await updateScene(sceneId, formData);
        history.push("/scenes");
      } catch (error) {
        console.error("Failed to update scene:", error);
        // Display error feedback to the user
      }
      setIsLoading(false);
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Scene name is required";
    }
    if (formData.devices.length === 0) {
      errors.devices = "At least one device must be selected";
    }
    return errors;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-scene">
      <div className="edit-scene-header">
        <h2>Edit Scene</h2>
        <button
          className="close-button"
          onClick={() => history.push("/scenes")}
        >
          Close
        </button>
      </div>
      <form className="edit-scene-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Scene Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Devices:</label>
          {availableDevices.map((device) => (
            <div key={device.id} className="device-item">
              <label>
                <input
                  type="checkbox"
                  checked={formData.devices.some((d) => d.id === device.id)}
                  onChange={() => handleDeviceToggle(device.id)}
                />
                {device.name}
              </label>
              {formData.devices.some((d) => d.id === device.id) && (
                <select
                  value={formData.devices.find((d) => d.id === device.id).state}
                  onChange={(e) =>
                    handleDeviceStateChange(device.id, e.target.value)
                  }
                >
                  <option value="on">On</option>
                  <option value="off">Off</option>
                </select>
              )}
            </div>
          ))}
          {errors.devices && (
            <span className="error-message">{errors.devices}</span>
          )}
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Updating..." : "Update Scene"}
        </button>
      </form>
    </div>
  );
};

export default EditScene;
