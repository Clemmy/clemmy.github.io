// /* entire container, keeps perspective */
// .flip-container {
// 	perspective: 1000px;
// }
// 	/* flip the pane when hovered */
// 	.flip-container:hover .flipper, .flip-container.hover .flipper {
// 		transform: rotateY(180deg);
// 	}

// .flip-container, .front, .back {
// 	width: 320px;
// 	height: 480px;
// }

// /* flip speed goes here */
// .flipper {
// 	transition: 0.6s;
// 	transform-style: preserve-3d;

// 	position: relative;
// }

// /* hide back of pane during swap */
// .front, .back {
// 	backface-visibility: hidden;

// 	position: absolute;
// 	top: 0;
// 	left: 0;
// }

// /* front pane, placed above back */
// .front {
// 	z-index: 2;
// 	/* for firefox 31 */
// 	transform: rotateY(0deg);
// }

// /* back, initially hidden pane */
// .back {
// 	transform: rotateY(180deg);
// }

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function FlippableAvatar() {
  return (
    <StaticImage
      className="border lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover rounded-full"
      src="../images/batur_center_2.png"
      alt="Me looking at a mountain"
      placeholder="blurred"
      aspectRatio={1}
      layout="constrained"
    />
  );
}
