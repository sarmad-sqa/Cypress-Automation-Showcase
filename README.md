# Cypress Automation Showcase

A professional Cypress E2E test automation project demonstrating **Page Object Model (POM)**, reusable page components, UI validation, and end-to-end testing workflows using the **SauceDemo** application.

## 📌 Project Overview

This project showcases a structured approach to web test automation using **Cypress** and the **Page Object Model design pattern**.

The automation covers key SauceDemo user workflows, with page-specific actions and locators organized into reusable Page Object classes.

The project is designed to demonstrate:

* Maintainable test automation structure
* Page Object Model implementation
* Reusable page components
* UI validation and assertions
* End-to-end user workflows
* Cypress test execution through UI and CLI

## 🛠️ Tech Stack

* **Automation Tool:** Cypress
* **Language:** JavaScript
* **Testing Type:** End-to-End (E2E) Testing
* **Design Pattern:** Page Object Model (POM)
* **Application Under Test:** SauceDemo
* **Runtime:** Node.js
* **IDE:** Visual Studio Code

## 📂 Project Structure

```text
Cypress-Automation-Showcase/
│
├── cypress/
│   ├── e2e/
│   │   ├── Pages/
│   │   │   ├── MyCart.js
│   │   │   ├── MyCheckout.js
│   │   │   ├── MyLogout.js
│   │   │   ├── NewLogin.js
│   │   │   ├── SearchingPage.js
│   │   │   └── SortPage.js
│   │   │
│   │   └── Swags-Labs.cy.js
│   │
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## 🧩 Page Object Model

The project follows the **Page Object Model (POM)** approach by separating page-specific locators and actions from the test specification.

### Page Objects

| Page Object        | Responsibility                 |
| ------------------ | ------------------------------ |
| `NewLogin.js`      | Login functionality            |
| `SearchingPage.js` | Product/search-related actions |
| `SortPage.js`      | Product sorting functionality  |
| `MyCart.js`        | Cart-related actions           |
| `MyCheckout.js`    | Checkout workflow              |
| `MyLogout.js`      | Logout functionality           |

This structure helps keep test cases cleaner and makes page-level functionality reusable and easier to maintain.

## 🧪 Automated Workflow

The main test specification:

`Swags-Labs.cy.js`

automates a complete SauceDemo user workflow using the Page Object classes.

The workflow includes areas such as:

* User login
* Product interaction
* Product sorting
* Cart operations
* Checkout
* Logout
* UI validations and assertions

## ▶️ Installation & Setup

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/sarmad-sqa/Cypress-Automation-Showcase.git
cd Cypress-Automation-Showcase
```

Install project dependencies:

```bash
npm install
```

## 🚀 Running Tests

### Open Cypress Test Runner

```bash
npx cypress open
```

### Run Tests in Headless Mode

```bash
npx cypress run
```

## 📊 Test Execution Result

Latest test execution:

| Metric   | Result |
| -------- | -----: |
| Specs    |      1 |
| Tests    |      1 |
| Passed   |      1 |
| Failed   |      0 |
| Pending  |      0 |
| Skipped  |      0 |
| Duration | 1m 23s |

### Result

**All specs passed successfully. ✅**

## 🎯 Purpose

This project is part of my **SQA / Test Automation portfolio** and demonstrates practical experience with Cypress, JavaScript, E2E testing, and the Page Object Model design pattern.

---

**Author:** Sarmad Sarwar
**Role:** SQA Engineer
