import { Header } from "./components/layouts";

// import fonts
import '@fontsource-variable/inter';
import '@fontsource/dm-serif-text';

// import components
import { Light } from "./components/lights";


function App() {
  const firstName = 'Jesse';
  return (
    <div className="bg-red-700">
      <Header />
      <main>
        <h1 className="text-center">Hello {firstName}!</h1>
        <h2 className="text-center">Hello {firstName}!</h2>
        <h3 className="text-center">Hello {firstName}!</h3>
        <Light v={20}/>
      </main>
    </div>
  );
}

export default App;
