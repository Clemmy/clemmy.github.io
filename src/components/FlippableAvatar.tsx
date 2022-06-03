import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';

const containerStyles = css`
  perspective: 2000px;

  &:hover .flipper {
    transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.5s;
    transform-style: preserve-3d;

    display: flex;
    width: 100%;
    align-items: stretch;
    will-change: transform;
  }

  .front {
    backface-visibility: hidden;
    width: 100%;
    flex: 0 0 auto;

    z-index: 2;
    transform: rotateY(0deg);
  }

  .back {
    backface-visibility: hidden;
    width: 100%;
    flex: 0 0 auto;
    margin-left: -100%;

    transform: rotateY(180deg);
  }
`;

export function FlippableAvatar() {
  return (
    <div
      css={containerStyles}
      className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded-full"
    >
      <div className="flipper">
        <div className="front">
          <StaticImage
            className="border-4 object-cover rounded-full"
            src="../images/batur_center_2.png"
            alt="Me looking at a mountain"
            placeholder="blurred"
            aspectRatio={1}
            layout="constrained"
          />
        </div>
        <div className="back">
          <StaticImage
            className="border-4 object-cover rounded-full"
            src="../images/batur_center_2.png"
            alt="Me looking at a mountain"
            placeholder="blurred"
            aspectRatio={1}
            layout="constrained"
          />
        </div>
      </div>
    </div>
  );
}
