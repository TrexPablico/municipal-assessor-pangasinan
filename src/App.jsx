import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resources from "./components/Resources";
import ResourceDetail from "./components/ResourceDetail";
import MainLayout from "./components/MainLayout";
import Contact from "./components/Contact"; // Import Contact component
import Media from "./pages/Media";
import Announcements from "./pages/Announcements";
import About from "./pages/About";

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
        {/* New route for Media page */}
        <Route
          path="/media"
          element={
            <MainLayout>
              <Media />
            </MainLayout>
          }
        />
        {/* New route for Announcements page */}
        <Route
          path="/announcements"
          element={
            <MainLayout>
              <Announcements />
            </MainLayout>
          }
        />
        {/* New route for About Us page */}
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
