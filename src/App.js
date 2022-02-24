import "./App.css";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Localisation from "./Components/localisation/Localisation";
import Video from "./Components/video/Video";

function App() {
  return (
    <div className="app">
      <Video />
      <Localisation />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
