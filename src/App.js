import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import {useDispatch } from 'react-redux'
import { useEffect } from "react";
import {SetNavSwitch} from '../src/features/nav/navSwitchSlice'
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
   if(window.location.pathname==="/about"){
      dispatch(SetNavSwitch(1))
  }
  else if(window.location.pathname==="/services"){
    dispatch(SetNavSwitch(2))
}
else if(window.location.pathname==="/contact"){
  dispatch(SetNavSwitch(1))
}
else{
  dispatch(SetNavSwitch(0))
}
}, [dispatch])
  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Services/>}/>
         <Route path="/contact" element={<Contact/>}/>
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
