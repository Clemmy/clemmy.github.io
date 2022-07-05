import { useEffect } from 'react';
import { Portal } from './Portal';

function Modal({
  children,
  isOpen,
  handleClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal wrapperId="react-portal-modal-container">
      <div
        className="backdrop fixed inset-0 flex flex-col justify-center items-center z-50 p-2 bg-black bg-opacity-40"
        aria-modal={true}
      >
	{children}
      </div>
    </Portal>
  );
}

export default Modal;
