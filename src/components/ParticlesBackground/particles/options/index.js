export const particlesOptions = {
  fpsLimit: 60,
  fullScreen: { enable: false, zIndex: 0 },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 40,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: ["rgb(14,165,233)", "#db2777", "#ffffff", "#312e81"],
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 200,
    },
    opacity: {
      value: 0.15,
      random: {
        enable: true,
        minimumValue: 0.1,
      },
      animation: {
        enable: true,
        speed: 0.15,
        minimumValue: 0.1,
        sync: true,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 2, max: 30 },
    },

  },
  detectRetina: true,
};