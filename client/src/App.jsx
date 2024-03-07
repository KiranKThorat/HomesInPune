import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import Signout from "./Pages/Signout";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Header from "./components/Header";
import PrivateRoute from './components/PrivateRoute';
import CreateListing from "./Pages/CreateListing";
import UpdateListing from './Pages/UpdateListing.jsx';

export default function App() {
  return( <BrowserRouter>
 < Header />
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<Signin/>} />
  <Route path="/signup" element={<Signout/>} />
  <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>
        <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
  <Route path="/about" element={<About/>} />

 </Routes>

  </BrowserRouter>
  )
}
