npm init -y
npm install @playwright/test
npx playwright install
npm install -D typescript @types/node
npm init playwright@latest (жмакать Enter)
или сразу
npm init playwright@latest
npm install dotenv

запуски скриптов 
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:headed": "playwright test --headed",
    "report": "playwright show-report"