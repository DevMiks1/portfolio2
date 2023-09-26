import { Routes, Route } from "react-router-dom";
import { Home, About, Tech, Contact, PageNotFound, Project } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <About />
              <Tech />
              <Project />
              <Contact />
            </div>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};


