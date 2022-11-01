import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MyRouters from "./routers/routes";
import { InfoProvider } from "./context/infoContext";

function App() {
  return (
    <InfoProvider>
      <div>
        <Header />
        <MyRouters />
        <Footer />
      </div>
    </InfoProvider>
  );
}

export default App;
