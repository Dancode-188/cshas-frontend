import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import DeviceList from "./components/Devices/DeviceList/DeviceList";
import AddDevice from "./components/Devices/AddDevice/AddDevice";
import EditDevice from "./components/Devices/EditDevice/EditDevice";
import AutomationList from "./components/Automations/AutomationList/AutomationList";
import AddAutomation from "./components/Automations/AddAutomation/AddAutomation";
import EditAutomation from "./components/Automations/EditAutomation/EditAutomation";
import SceneList from "./components/Scenes/SceneList/SceneList";
import AddScene from "./components/Scenes/AddScene/AddScene";
import EditScene from "./components/Scenes/EditScene/EditScene";
import NotificationSettings from "./components/Settings/NotificationSettings/NotificationSettings";
import ProfileSettings from "./components/Settings/ProfileSettings/ProfileSettings";
import SettingsForm from "./components/Settings/SettingsForm/SettingsForm";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/devices" element={<DeviceList />} />
            <Route path="/devices/add" element={<AddDevice />} />
            <Route path="/devices/edit/:deviceId" element={<EditDevice />} />
            <Route path="/automations" element={<AutomationList />} />
            <Route path="/automations/add" element={<AddAutomation />} />
            <Route
              path="/automations/edit/:automationId"
              element={<EditAutomation />}
            />
            <Route path="/scenes" element={<SceneList />} />
            <Route path="/scenes/add" element={<AddScene />} />
            <Route path="/scenes/edit/:sceneId" element={<EditScene />} />
            <Route path="/settings-form" element={<SettingsForm />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route
              path="/notification-settings"
              element={<NotificationSettings />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
