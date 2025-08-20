import { AnimationType } from './types'; // Importing the AnimationType interface

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In',
    duration: 500, // Duration in milliseconds
    effect: 'opacity', // CSS property to animate
  },
  {
    name: 'Slide Up',
    duration: 700,
    effect: 'transform', // CSS property to animate
    transformValue: 'translateY(-20px)', // Value for the transform effect
  },
  {
    name: 'Zoom In',
    duration: 600,
    effect: 'transform',
    transformValue: 'scale(1.1)', // Value for the zoom effect
  },
  {
    name: 'Rotate',
    duration: 800,
    effect: 'transform',
    transformValue: 'rotate(15deg)', // Value for the rotate effect
  },
  {
    name: 'Bounce',
    duration: 1000,
    effect: 'animation', // CSS property to animate
    animationName: 'bounce', // Name of the keyframe animation
  },
];

export default animationTypes; // Exporting the animationTypes array as default