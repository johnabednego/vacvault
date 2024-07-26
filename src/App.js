import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import CustomerExperience from "./pages/CustomerExperience/CustomerExperience";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [book, setBook] = useState(false)

  useEffect(() => {
    Aos.init();
  });
  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route index element={<Home book={book} setBook={setBook}/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services book={book} setBook={setBook}/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/customer_experience" element={<CustomerExperience/>}/>
         <Route path="/dashboard" element={<Dashboard book={book} setBook={setBook}/>}/>
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
