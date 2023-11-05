import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div >
       <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          {/* <Route path="/dashboard" element={<CustomerDashboard/>}/>
          <Route path="/dashboard/carrier" element={<CarrierDashboard/>}/> */}
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
