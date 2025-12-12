# 🎭 Full Web App Test Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

A robust, scalable, and maintainable End-to-End (E2E) testing framework built with **Playwright** and **TypeScript**. This project demonstrates modern test automation practices including the Page Object Model (POM), CI/CD integration, and comprehensive reporting.

---

## 🚀 Key Features

-   **Page Object Model (POM)**: modular and reusable page components.
-   **Cross-Browser Testing**: Automated execution on Chromium, Firefox, and WebKit.
-   **Custom Fixtures**: Reusable test setups and teardowns.
-   **Allure Reporting**: Detailed test reports with screenshots, videos, and trace files.
-   **CI/CD Pipeline**: Automated test runs on every push using **GitHub Actions**.
-   **Parallel Execution**: Efficient test running for faster feedback.

## 🛠️ Tech Stack

-   **Framework**: Playwright
-   **Language**: TypeScript
-   **Reporting**: Allure Report
-   **CI/CD**: GitHub Actions
-   **Package Manager**: npm

## 📂 Project Structure

```
├── .github/workflows   # GitHub Actions CI/CD pipelines
├── tests               # Test specs (e.g., login.spec.ts)
├── pages               # Page Object Models (POM)
├── fixtures            # Custom test fixtures
├── utils               # Helper functions and utilities
├── playwright.config.ts # Framework configuration
└── package.json        # Dependencies and scripts
```

## 📊 Test Reporting

This framework uses **Allure Report** for visualization.

*(Add a screenshot of your Allure Report Dashboard here)*

## ⚡ Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm

### Installation

```bash
git clone https://github.com/aprilquijanop143-arch/Full-Web-App-Test-Automation-Framework-using-Playwright.git
cd Full-Web-App-Test-Automation-Framework-using-Playwright
npm install
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/login.spec.ts

# Run inside UI Mode
npx playwright test --ui
```

### Viewing Reports

```bash
# Generate and open Allure Report
npm run report
```

---

## 🔄 CI/CD Pipeline

The project includes a GitHub Actions workflow that automatically:
1.  Installs dependencies.
2.  Runs the full test suite.
3.  Generates and publishes the Allure Report (optional configuration).

[View CI Pipeline](https://github.com/aprilquijanop143-arch/Full-Web-App-Test-Automation-Framework-using-Playwright/actions)

---

Developed by **[April Quijano](https://github.com/aprilquijanop143-arch)**
