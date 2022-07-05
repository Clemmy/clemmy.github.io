import { Fragment, useState } from 'react';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from './Modal';

export function VenmoButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <button
        className={cx(
          'text-white border-0 py-2 px-6 hover:brightness-75 flex flex-col items-center justify-center rounded-t text-lg bg-yellow-800 w-full cursor mb-3'
        )}
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <div className="flex items-center justify-center">
          <ion-icon class="mr-2" name="logo-venmo"></ion-icon>
          Buy me a coffee
        </div>
      </button>
      <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="flex items-center justify-center p-4 sm:p-0">
          {/* transform transition-all */}
          <div className="relative overflow-hidden rounded max-w-lg">
            <div className="flex-flex-col w-full bg-yellow-800 p-4 text-white">
              <div className="text-right">
                <ion-icon
                  name="close-outline"
                  class="cursor-pointer text-xl"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
              <div className="mb-2">
                <StaticImage
                  className="h-full object-contain"
                  aspectRatio={0.70573}
                  src="../images/venmo_qr_code.png"
                  alt="Venmo QR Code"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
              Or{' '}
              <a
                className="underline"
                href="https://venmo.com/code?user_id=1776456220803072919"
                target="_blank"
              >
                click here to go directly to my Venmo page.
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}
