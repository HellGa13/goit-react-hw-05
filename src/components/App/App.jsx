import { Routes, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import HomePage from "../../pages/HomePage";

import './App.css'


function App() {

  return (
    <div className={css.container}>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
