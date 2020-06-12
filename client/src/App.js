import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

// Our Components
import { AuthProvider, useAuth } from "./utils/auth";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact"
import Perks from "./pages/Perks"
import Plans from "./pages/Plans"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Classes from "./pages/Classes"

function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Redirect to="/homepage" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <ProtectedRoute exact path="/">
              <Homepage />
            </ProtectedRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/homepage">
              <Homepage />
            </Route>
            <Route exact path="/home">
            <Homepage />
            </Route>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <ProtectedRoute exact path="/perks">
              <Perks />
            </ProtectedRoute>
            <Route exact path="/plans">
              <Plans />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
            <Route exact path="/classes">
              <Classes />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
