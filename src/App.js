import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AddBooking from "./Components/AddBooking/AddBooking";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageBookings from "./Components/ManageBookings/ManageBookings";
import MyBookings from "./Components/MyBookings/MyBookings";
import NotFound from "./Components/NotFound/NotFound";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/placeOrder/:_id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <ManageBookings></ManageBookings>
            </PrivateRoute>
            <PrivateRoute path="/addBooking">
              <AddBooking></AddBooking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
