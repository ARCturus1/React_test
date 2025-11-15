# React Weather App — TypeScript + Vite + Tailwind

This project is a modern React application using TypeScript, Vite, Tailwind CSS, and ESLint. It is designed to display weather data for cities using an external API.

## Features

- **React + TypeScript** — Typed code for better support and debugging.
- **Vite** — Fast development and build.
- **Tailwind CSS** — Styling via utility classes.
- **ESLint** — Static analysis with TypeScript support.
- **React Hooks** — `useFetch`, `useDebounce`, `useThemeContext`.
- **Context API** — Theme and location management.
- **Weather API** — Integration with external API for weather data.
- **Routing** — React Router for navigation.
- **Error Boundaries** — Error handling in components.
- **Theme Toggle** — Light/dark theme switching.
- **Cities List** — List of cities with weather.
- **City Details** — Detailed weather information for a city.
- **Error & NotFound Pages** — Error and not-found page handling.
- **Feedback Page** — Feedback form page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ARCturus1/React_test
   cd react-weather
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   npm run dev
   ```

## Project Structure

```
react-weather/
├── src/
│   ├── api/          # API services
│   ├── components/   # Components
│   ├── contexts/     # Contexts
│   ├── hooks/        # Hooks
│   ├── models/       # Models
│   ├── routes/       # Routes
│   ├── utils/        # Utilities
│   ├── enums/        # Constants
│   ├── styles/       # Styles
│   └── index.tsx     # Main component
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Running

```bash
npm run dev
```

## Testing

Tests are not yet implemented, but it is recommended to add them using `@testing-library/react` and `jest`.

## Development

- Add new components.
- Improve data fetching logic.
- Add tests.
- Add documentation.
- Add `package.json` and `tsconfig.json`.
- Add `gitignore`.
- Add `README.md` to `public/`, `src/`, or `dist/`.

## License

MIT

## Author

Roman Savchenko

