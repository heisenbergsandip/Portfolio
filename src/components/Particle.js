import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 50, // Adjust the number of particles as needed
            density: {
              enable: true,
              value_area: 700, // Adjust the area for particle density
            },
          },
          shape: {
            type: "circle", // Particle shape (circle, edge, triangle, polygon, etc.)
          },
          opacity: {
            value: 0.6, // Adjust opacity
            random: true,
            anim: {
              enable: true,
              speed: 1.3,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, // Adjust size of particles
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable lines between particles
          },
          move: {
            enable: true,
            speed: 2, // Adjust speed of particles
            direction: "bottom", // Flow direction (bottom, top, left, right)
            random: true, // Introduce randomness in particle movement
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "bubble",
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
          retina_detect: true,
        },
      }}
    />
  );
}

export default Particle;
