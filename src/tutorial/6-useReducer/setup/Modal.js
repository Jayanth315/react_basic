import React, { useContext, useEffect } from "react";

const Modal = () => {
  useEffect(() => {
    setTimeout(() => closeModal(), 3000);
  });
  const { modalContent, closeModal } = useContext(ItemContext);
  return (
    <div className="modal">
      <p>{modalContent}</p>
    </div>
  );
};

export default Modal;
