import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
// User data & preferences
import { navBar, mainInfo } from './MyData.js';
// Components
import Navbar from "./components/NavBar.js";
import BaseLayout from "./components/BaseLayout.js";
import Footer from "./components/Footer.js";

function App() {
  // This will run when the page first loads and change the title to your first and last name
  const [title] = useState(`${mainInfo.firstName} ${mainInfo.lastName}`);
  useEffect(() => {
    document.title = title;
  }, [title]);

  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <BaseLayout ref={titleRef} />
      <Footer />
    </BrowserRouter>
  );

  // let [darkMode, setDarkMode] = useState(false);

  // function handleToggleDarkMode() {
  //   let oppositeOfCurrentDarkMode = !darkMode
  //   console.log(oppositeOfCurrentDarkMode)
  //   localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
  //   setDarkMode(oppositeOfCurrentDarkMode)
  // }

  // useEffect(() => {
  //   let detectedDarkMode = eval(localStorage.getItem('darkMode'));

  //   if (detectedDarkMode) {
  //     setDarkMode(detectedDarkMode)
  //   } else {
  //     localStorage.setItem('darkMode', 'false')
  //   }
  // }, [])
}

export default App;