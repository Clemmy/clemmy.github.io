import { Fragment, useState } from 'react';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import Modal from './Modal';

const VENMO_URL = 'https://venmo.com/code?user_id=1776456220803072919'

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
        <div className="flex items-center justify-center p-4 sm:p-0" onClick={(e) => e.stopPropagation()}>
          {/* transform transition-all */}
          <div className="relative overflow-hidden rounded-lg max-w-sm">
            <div className="flex-flex-col w-full bg-yellow-800 p-4 text-white text-center">
              <div className="text-right">
                <ion-icon
                  name="close-outline"
                  class="cursor-pointer text-xl"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
              <div
                className="my-4 cursor-pointer"
                onClick={() => {
                  window.open(
                    VENMO_URL,
                    '_blank'
                  );
                }}
              >
                <StaticImage
                  className="h-full object-contain rounded"
                  aspectRatio={0.70573}
                  src="../images/venmo_qr_code.png"
                  alt="Venmo QR Code"
                  placeholder="blurred"
                  layout="constrained"
                />
              </div>
              <span className="text-lg leading-relaxed">
                Or{' '}
                <a
                  className="underline"
                  href={VENMO_URL}
                  target="_blank"
                >
                  click here.
                </a>
              </span>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
}
