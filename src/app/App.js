// import react libraries
import { Route, Routes } from 'react-router-dom';

// import styles
import { Footer, Header } from "./components/layouts";
import { ROUTES } from './routes';
import { HygraphProvidor } from './services';

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
// import fonts

import '@fontsource-variable/inter';
import '@fontsource/dm-serif-text';
import { AboutPage, ContactPage, HomePage, ProjectPage, ProjectsPage } from './pages';
// import components



function App() {
  const app = useRef(null);

  return (
    <HygraphProvidor>
    <div ref={app}>
      <Header />
      <main className='mt-[7rem]'>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage/>} />
          <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
          <Route path={ROUTES.CONTACT} element={<ContactPage/>} />
          <Route path={ROUTES.PROJECTS}>
            <Route index element={<ProjectsPage/>} />
            <Route path={ROUTES.PROJECT} element={<ProjectPage/>} />
          </Route>
          <Route path={ROUTES.NOT_FOUND} element={<h1>404</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
    </HygraphProvidor>
  );
}

export default App;

