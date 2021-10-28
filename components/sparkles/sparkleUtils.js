
const DEFAULT_COLOR = "hsl(50deg,100%,50%)";

// Utils
export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  };
  
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
// 

// Function to generate Sparkles
export const generateSparkle = (color = DEFAULT_COLOR) => {
    return {
        id: String(random(10000, 99999)),
        createdAt: Date.now(),
        // Bright Yellow Color
        color,
        size: random(10, 20),
        style: {
            // Pick a random spot in the available space
            top: random(0, 100) + "%",
            left: random(0, 100) + "%",
            // Float sparkles above sibling ccontent
            zIndex: 2,
        },
    };
};
