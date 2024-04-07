import Navbar from "./assets/layout/general/navbar/Navbar";
import "./App.scss";
import HomePage from "./assets/layout/components/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./assets/layout/components/About/About";
import Projects from "./assets/layout/components/Projects/ProjectsGithub";
import ProjectDetail from "./assets/layout/components/Project_detail/Project_detail";
import { Suspense } from "react";
import Contact from "./assets/layout/components/Contact/Contact";
import Publication from "./assets/layout/components/Publication/Publications";
import Post from "./assets/layout/components/Post/Post";
function App() {
  return (

    <>
      <Router>
      <Navbar></Navbar>
      <Suspense fallback={<div className="container">Loading...</div>}>
				<Routes>
					<Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/post" element={<Post />} />
          <Route path="/projects/:projectName" element={<ProjectDetail />} />
          <Route path="/" element={<HomePage />} />

				</Routes>
			</Suspense>
      </Router>
    </>

  );
}

export default App;
