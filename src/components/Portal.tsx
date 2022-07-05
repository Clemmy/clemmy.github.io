import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

/**
 * An abstraction around React Portals to make usage simpler.
 * It basically just appends an element if it doesn't already exist in the DOM.
 * Code inspired by https://blog.logrocket.com/build-modal-with-react-portals/
 */
export function Portal({
  children,
  wrapperId = 'react-portal-wrapper',
}: {
  children: React.ReactNode;
  wrapperId?: string;
}) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let isElementCreatedByUs = false;

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
      isElementCreatedByUs = true;
    }

    setWrapperElement(element);

    return () => {
      // delete the programatically created element
      if (isElementCreatedByUs && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) {
    return null;
  }

  return createPortal(children, wrapperElement);
}
