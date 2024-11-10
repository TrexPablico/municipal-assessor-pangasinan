import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resources from "./components/Resources";
import ResourceDetail from "./components/ResourceDetail";
import MainLayout from "./components/MainLayout";
import Contact from "./components/Contact"; // Import Contact component

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Resources />
            </MainLayout>
          }
        />
        <Route
          path="/resource/:id"
          element={
            <MainLayout>
              <ResourceDetail />
            </MainLayout>
          }
        />
        {/* New route for Contact page */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
