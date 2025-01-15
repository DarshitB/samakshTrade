# Samaksh Trade Project

## Overview
Samaksh Trade is a modern web application built using **Next.js**. The application provides various features and pages to cater to business needs such as showcasing services, about us sections, career opportunities, and free consultations. This repository contains all the necessary components, pages, and assets required for development and deployment.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Scripts](#scripts)
4. [Features](#features)
5. [Assets](#assets)
6. [Styling](#styling)

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your machine:
- **Node.js** (v14 or later)
- **npm** or **yarn** (npm comes pre-installed with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd samaksh-trade
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

---

## Project Structure

```
samaksh-trade/
├── components/        # Reusable UI components
├── pages/             # Application pages
│   ├── api/           # API routes
├── public/            # Static assets (images, icons, etc.)
├── styles/            # CSS modules for styling
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore file
├── next.config.js     # Next.js configuration
├── package.json       # Project metadata and dependencies
└── package-lock.json  # Lock file for dependencies
```

### Key Directories

#### Components
Reusable UI components to build pages:
- **about.js**: About section.
- **navbar.js**: Navigation bar.
- **footer.js**: Footer component.
- **Cursor.js**: Custom cursor functionality.

#### Pages
Each file in this directory represents a route in the application:
- **index.js**: Homepage.
- **AboutUs.js**: About Us page.
- **Career.js**: Career page.
- **Services.js**: Services page.
- **api/**: API routes (e.g., `hello.js`).

#### Public
Static assets for the project, including images, icons, and logos:
- `favicon.ico`: Application favicon.
- **images/**: All project-related images and icons.

#### Styles
CSS modules for component-specific styles:
- **globals.css**: Global styles for the application.
- `*.module.css`: Component-specific styles (e.g., `hero.module.css`, `footer.module.css`).

---

## Scripts

### Development
```bash
npm run dev
```
Starts the development server.

### Build
```bash
npm run build
```
Builds the application for production.

### Start
```bash
npm start
```
Starts the production server after building the application.

---

## Features

1. **Reusable Components**: Modular structure for easy code reuse.
2. **Dynamic Pages**: Includes pages for services, careers, and consultations.
3. **Static Assets**: Optimized use of images and icons.
4. **Custom Styling**: Scoped styles using CSS modules.

---

## Assets
Located in the `public/` folder:
- **Logos**: Multiple variants of the logo (e.g., `logo.svg`, `logoblue.svg`).
- **Images**: Backgrounds, icons, and decorative elements.
- **Favicons**: Icons for browser tabs.

---

## Styling
Styles are modular and scoped to individual components using CSS modules. Global styles are defined in `globals.css`.

---

## License
This project is licensed under the [MIT License](LICENSE).

