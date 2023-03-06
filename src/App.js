// import logo from './logo.svg';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import "./App.css";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("primary");

  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  function toggleMode() {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been applied", "success");
      document.title = "TextConvert Dark Mode";
      setTimeout(() => {
        document.title = "TextConvert Dark Mode";
      }, 8000);
      setTimeout(() => {
        document.title = "You are in Dark Mode";
      }, 4000);
      setTimeout(() => {
        document.title = "Installed TextConvert";
      }, 4000);
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been applied", "success");
      document.title = "TextConvert Light Mode";
      setTimeout(() => {
        document.title = "TextConvert Light Mode";
      }, 8000);
      setTimeout(() => {
        document.title = "You are in Light Mode";
      }, 4000);
      setTimeout(() => {
        document.title = "Installed TextConvert";
      }, 2000);
    }
  }

  return (
    <>
    hello
      <Navbar
        title="TextConvert"
        about="About"
        mode={mode}
        toggle={toggleMode}
      />
      <Alert alert={alert} />
      <About mode={mode} />
      <div className="container my-3">
        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
