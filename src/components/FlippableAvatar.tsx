import React, { useLayoutEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { css } from '@emotion/react';
import { useWindowSize } from '../hooks/useWindowSize';

// Flipping based on https://davidwalsh.name/css-flip
const containerStyles = css`
  perspective: 2000px;
  // Fix hover hitbox to be within the circle
  clip-path: circle(50% at 50% 50%);

  &:hover .flipper {
    transform: rotateY(180deg);
  }

  .flipper {
    transition: 0.5s;
    transform-style: preserve-3d;

    position: relative;
  }

  .front {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    z-index: 2;
    transform: rotateY(0deg);
  }

  .back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;

    transform: rotateY(180deg);
  }
`;

export function FlippableAvatar() {
  const size = useWindowSize();
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // This ensures that the container maintains an aspect ratio of 1
    // despite the children's relative positioning (which makes height 0)
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientWidth);
    }
  }, [size]);

  return (
    <div
      ref={containerRef}
      css={containerStyles}
      style={{ height: containerHeight }}
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
