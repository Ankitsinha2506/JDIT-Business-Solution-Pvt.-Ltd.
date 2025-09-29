import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToHashElement from "./components/layout/ScrollToHashElement";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const USHealthcare = lazy(() => import("./pages/USHealthcare"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <Routes>
        {/* Parent layout route */}
        <Route
          path="/"
          element={
            <Layout>
              {/* This runs on every route change for smooth scrolling */}
              <ScrollToHashElement />
            </Layout>
          }
        >
          {/* Child routes */}
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="us-healthcare"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <USHealthcare />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="careers"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Careers />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;


// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Lazy load only NotFound page
// const NotFound = lazy(() => import("./pages/NotFound"));

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Catch all unmatched routes */}
//         <Route
//           path="*"
//           element={
//             <Suspense fallback={<div>Loading...</div>}>
//               <NotFound />
//             </Suspense>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
