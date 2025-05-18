import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import './App.css'

const HomePage = lazy(() => import("../../pages/HomePage"));
const Navigation = lazy(() => import("../Navigation/Navigation"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));


function App() {

  return (
    <div className="container">
      <Navigation />

      <Suspense fallback={ <strong>Loading page, wait...</strong> } >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} >
           <Route path="cast" element={<MovieCast />} />  
           <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
