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
import Customer from "./pages/Customer"
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
            <ProtectedRoute exact path="/home">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute exact path="/contact">
              <Contact />
            </ProtectedRoute>
            <ProtectedRoute exact path="/perks">
              <Perks />
            </ProtectedRoute>
            <ProtectedRoute exact path="/plans">
              <Plans />
            </ProtectedRoute>
            <ProtectedRoute exact path="/about">
              <About />
            </ProtectedRoute>
            <ProtectedRoute exact path="/customer-care">
              <Customer />
            </ProtectedRoute>
            <ProtectedRoute exact path="/shop">
              <Shop />
            </ProtectedRoute>
            <ProtectedRoute exact path="/classes">
              <Classes />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
