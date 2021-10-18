import React from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

const App = () => {
  return (
    <div>
      <Navbar />
      <Modal
        title="Cute puppies!"
        imgSrc="https://images.pexels.com/photos/2145878/pexels-photo-2145878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default App;
