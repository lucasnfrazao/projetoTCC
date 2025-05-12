import ReactDOM from 'react-dom';
import './Modal.css';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        {/* <button className="modalClose" onClick={onClose}>
          &times;
        </button> */}
        {children}
      </div>
    </div>,
    modalRoot
  );
}