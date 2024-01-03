// import react libraries
import { Route, Routes } from 'react-router-dom';

// import styles
import { Header } from "./components/layouts";
import { ROUTES } from './routes';
import { HygraphProvidor } from './services';

// import fonts
import '@fontsource-variable/inter';
import '@fontsource/dm-serif-text';
import { AboutPage, ContactPage, HomePage, ProjectPage, ProjectsPage } from './pages';
// import components



function App() {
  const firstName = 'Jesse';
  return (
    <HygraphProvidor>
    <div>
      <Header />
      <main>
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

        <h1 className="text-4xl text-center text-white font-serif">Hello {firstName}!</h1>
      </main>
    </div>
    </HygraphProvidor>
  );
}

export default App;

