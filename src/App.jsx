import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

// import 'bootstrap/dist/css/bootstrap.min.css';



// Use React.lazy for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const USHealthcare = lazy(() => import('./pages/USHealthcare'));
const Careers = lazy(() => import('./pages/Careers') )


const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />
          <Route path="services" element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          } />
          <Route path="us-healthcare" element={
            <Suspense fallback={<PageLoader />}>
              <USHealthcare />
            </Suspense>
          } />
          <Route path="contact" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />

          <Route path='careers' element={
            <Suspense fallback={<PageLoader />}>
              <Careers />
            </Suspense>
          }
          
          />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
