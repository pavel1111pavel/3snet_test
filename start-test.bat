@echo off

echo Installing dependencies...
npm install

echo Installing Playwright browsers...
npx playwright install

echo Starting UI...
start http://localhost:3000
npm run start-test