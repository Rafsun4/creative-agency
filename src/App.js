import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import TakeOrder from './components/DashBoard/Client/Order/ClientOrder';
import PrivateRoute from './components/Login/PrivateRoute';
import ServiceListClient from './components/DashBoard/Client/ServiceListClient/ServiceListClient';
import Review from './components/DashBoard/Client/Review/Review';
import MakeAdmin from './components/DashBoard/Admin/MakeAdmin/MakeAdmin';
import ServiceListAdmin from './components/DashBoard/Admin/ServiceListAdmin/ServiceListAdmin';
import AddService from './components/DashBoard/Admin/AddService/AddService';
import Sidebar from './components/DashBoard/Client/Sidebar/Sidebar';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/sidebar">
              <Sidebar></Sidebar>
            </PrivateRoute>
            <PrivateRoute path="/client/services">
              <ServiceListClient></ServiceListClient>
            </PrivateRoute>
            <PrivateRoute path="/client/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/client/order">
              <TakeOrder></TakeOrder>
            </PrivateRoute>
            <PrivateRoute path="/admin/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/admin/serviceListAdmin">
              <ServiceListAdmin></ServiceListAdmin>
            </PrivateRoute>
            <PrivateRoute path="/admin/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
