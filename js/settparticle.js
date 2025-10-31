particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 120, // Número de partículas
          "density": {
            "enable": true,
            "value_area": 600
          }
        },
        "color": {
          "value": "#ff6f02" // Cor das partículas
        },
        "shape": {
          "type": "circle" // Formato (pode ser "triangle", "edge", "polygon", etc.)
        },
        "opacity": {
          "value": .5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#e72c71",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6, // Velocidade
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab" // Interação ao passar o mouse: "grab", "bubble", "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push" // Interação ao clicar: "push", "remove"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4 // Quantidade de partículas ao clicar
          }
        }
      },
      "retina_detect": true
    });