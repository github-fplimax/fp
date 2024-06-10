// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         green: {
//           50: '#30AF5B',
//           90: '#292C27',
//         },
//         gray: {
//           10: '#EEEEEE',
//           20: '#A2A2A2',
//           30: '#7B7B7B',
//           50: '#585858',
//           90: '#141414',
//         },
//         orange: {
//           50: '#FF814C',
//         },
//         blue: {
//           70: '#021639',
//         },
//         yellow: {
//           50: '#FEC601',
//         },
//       },
//       backgroundImage: {
//         'bg-img-1': "url('/img-1.png')",
//         'bg-img-2': "url('/img-2.png')",
//         'feature-bg': "url('/feature-bg.png')",
//         pattern: "url('/pattern.png')",
//         'pattern-2': "url('/pattern-bg.png')",
//       },
//       screens: {
//         xs: '400px',
//         '3xl': '1680px',
//         '4xl': '2200px',
//       },
//       maxWidth: {
//         '10xl': '1512px',
//       },
//       borderRadius: {
//         '5xl': '40px',
//       },
//     },
//   },
//   plugins: [],
// };

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        'bg-hero': "url('/hero-image2.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: { addBase: (styles: Record<string, any>) => void, theme: (path: string) => Record<string, any> }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
