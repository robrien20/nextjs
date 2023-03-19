import { useState } from "react";

const useLoginForm = () => {
  const [showModal, setShowModal] = useState(false);

  const openLoginForm = () => {
    setShowModal(true);
  };
  const closeLoginForm = () => {
    setShowModal(false);
  };

  return { showModal, openLoginForm, closeLoginForm };
};

export default useLoginForm;
