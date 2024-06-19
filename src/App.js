import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navigation />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/devices" component={DeviceList} />
            <Route exact path="/devices/add" component={AddDevice} />
            <Route
              exact
              path="/devices/edit/:deviceId"
              component={EditDevice}
            />
            <Route exact path="/automations" component={AutomationList} />
            <Route exact path="/automations/add" component={AddAutomation} />
            <Route
              exact
              path="/automations/edit/:automationId"
              component={EditAutomation}
            />
            <Route exact path="/scenes" component={SceneList} />
            <Route exact path="/scenes/add" component={AddScene} />
            <Route exact path="/scenes/edit/:sceneId" component={EditScene} />
            <Route exact path="/settings" component={Settings} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
