import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import CustomerExperience from "./pages/CustomerExperience/CustomerExperience";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {

  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/customer_experience" element={<CustomerExperience/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
          {/*  <Route path="/dashboard/carrier" element={<CarrierDashboard/>}/> */}
          {/* <Route path="/contact" element={<Contact/>} />
          <Route path="/list" element={<ListProperty/>}/>
          <Route path="/facility_type/:data" element={<Search/>} />
          <Route path="/moredetails" element={<MoreDetails/>} />
          <Route path="/*" element={<ErrorPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
