import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../src/component/Header/Header.js";
import Footer from "./component/Footer/Footer.js";
import D from "./component/Header/d.js";
import Body from "./component/MainBody/Body.js";
import Charts from './component/Pages/charts/charts.js';
import Forms from './component/Pages/Forms/forms.js';
import Icons from './component/Pages/Icons/icons.js';
import Blankpage from './component/Pages/Samlpes/blank-page.js';
import Error404 from './component/Pages/Samlpes/error-404.js';
import Error500 from './component/Pages/Samlpes/error-500.js';
import Login from './component/Pages/Samlpes/login.js';
import Register from './component/Pages/Samlpes/register.js';
import Tables from './component/Pages/Tables/Tables.js';
import Buttons from './component/Pages/Ui-features/buttons.js';
import DropDown from './component/Pages/Ui-features/DropDown.js';
import Typography from './component/Pages/Ui-features/Typography.js';

function App() {
  return (
    <Router>
      <div className="container-scroller">
        <Header />
        <div className="container-fluid page-body-wrapper">
        <D />
          <Routes>
            
            <Route path="/" element={<Body />} />
            <Route path="/charts" element={<Charts/>} />
            <Route path="/forms" element={<Forms/>} />
            <Route path="/icons" element={<Icons/>} />
            <Route path="/blank" element={<Blankpage/>} />
            <Route path="/error404" element={<Error404/>} />
            <Route path="/error500" element={<Error500/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/tables" element={<Tables/>} />
            <Route path="/buttons" element={<Buttons/>} />
            <Route path="/dropdowns" element={<DropDown/>} />
            <Route path="/typography" element={<Typography/>} />
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
