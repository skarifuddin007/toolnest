module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1e40af", // blue-800
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#0f766e", // teal-700
          50: "#f0fdfa", // teal-50
          100: "#ccfbf1", // teal-100
          200: "#99f6e4", // teal-200
          300: "#5eead4", // teal-300
          400: "#2dd4bf", // teal-400
          500: "#14b8a6", // teal-500
          600: "#0d9488", // teal-600
          700: "#0f766e", // teal-700
          800: "#115e59", // teal-800
          900: "#134e4a", // teal-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#ea580c", // orange-600
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          200: "#fed7aa", // orange-200
          300: "#fdba74", // orange-300
          400: "#fb923c", // orange-400
          500: "#f97316", // orange-500
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
          800: "#9a3412", // orange-800
          900: "#7c2d12", // orange-900
        },
        // Background Colors
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        // Text Colors
        "text-primary": "#1f2937", // gray-800
        "text-secondary": "#6b7280", // gray-500
        // Status Colors
        success: {
          DEFAULT: "#059669", // emerald-600
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
        },
        warning: {
          DEFAULT: "#d97706", // amber-600
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        error: {
          DEFAULT: "#dc2626", // red-600
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'glass-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.25s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}