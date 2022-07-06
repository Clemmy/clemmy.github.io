import { useEffect, useState } from 'react';
import { Portal } from './Portal';
import { useTransition, animated, config } from '@react-spring/web';

function Modal({
  children,
  isOpen,
  handleClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  // Note that the modal contents children needs to stop event propagation
  // or else any clicks in the modal will trigger handleClose to be called
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

  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  const transitions = useTransition(isOpen, {
    config: isOpen ? { ...config.stiff } : { duration: 150 },
    from: { opacity: 0, transform: 'translateY(-40%)' },
    enter: { opacity: 0.4, transform: 'translateY(0%)' },
    leave: { opacity: 0, transform: 'translateY(-40%)' },
  });

  // Set the internal state to "open". We use this to prevent this component from
  // unmounting right away when isOpen is set to false to keep the closing animation.
  useEffect(() => {
    if (isOpen) {
      setInternalIsOpen(true);
    }
  }, [isOpen]);

  if (!isOpen && !internalIsOpen) {
    return null;
  }

  return (
    <Portal wrapperId="react-portal-modal-container">
      {transitions(
        ({ opacity, transform }, item) =>
          item && (
            <animated.div
              className="backdrop fixed inset-0 flex flex-col justify-center items-center z-50 p-2 bg-black"
              style={{
                // We use backgroundColor instead of opacity so it doesn't affect the child div
                backgroundColor: opacity.to((val) => `rgba(0, 0, 0, ${val})`),
              }}
              aria-modal={true}
              onClick={handleClose}
            >
              <animated.div
                className="flex items-center justify-center p-4 sm:p-0 overflow-hidden"
                style={{
                  transform,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </animated.div>
            </animated.div>
          )
      )}
    </Portal>
  );
}

export default Modal;
