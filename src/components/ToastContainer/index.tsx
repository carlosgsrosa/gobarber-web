import React from "react";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";

import { Container, Toast } from "./styles";

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu algum erro</strong>
          <p>error</p>
        </div>

        <button type="button">
          <FiXCircle size={15} />
        </button>
      </Toast>

      <Toast type="info" hasDescription={false}>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu algum erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={15} />
        </button>
      </Toast>

      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu algum erro</strong>
          <p>success</p>
        </div>

        <button type="button">
          <FiXCircle size={15} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
