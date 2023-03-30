import { useNavigate } from "react-router-dom";

import "./Modal.css";

export const Modal = ({ children }) =>
{
    const navigate = useNavigate();

    const closeHandler = () =>
    {
        navigate('..');
    }
  return (
    <>
      <div className="backdrop" onClick={closeHandler}>
        <dialog open className="modal">
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
