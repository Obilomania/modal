import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button className="btn btn__open" onClick={() => setOpenModal(true)}>
        Open
      </button>
      <Modal Open={openModal} close={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default App;
