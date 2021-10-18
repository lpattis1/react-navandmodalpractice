import React, { useState } from "react";

const Modal = ({ title, imgSrc }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        onClick={toggleModal}
        className={isOpen ? "modal-bg-open" : "modal-bg-closed"}
      >
        <div className="modal">
          <h3 className="modal-title">{title}</h3>
          <img src={imgSrc} alt="" className="puppy-img img-fluid" />
        </div>
      </div>

      <div className="modal-btn-handle">
        <button
          className="modal-btn btn bg-primary text-white"
          onClick={toggleModal}
        >
          Open Modal
        </button>
      </div>
    </>
  );
};

export default Modal;
