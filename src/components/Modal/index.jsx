import React from "react";
import { Container } from "./styles";

const Modal = ({ id = "modal", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  return (
    <Container>
      <div id={id} className="modal" onClick={handleOutsideClick}>
        <div className="container">
          <button className="close" onClick={onClose} />
          <div className="content">{children}</div>
        </div>
      </div>
    </Container>
  );
};

export default Modal;
