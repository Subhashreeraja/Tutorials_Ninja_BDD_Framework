const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "reports",
  reportPath: "reports/html",
  reportName: "Tutorials Ninja BDD Report",
  pageTitle: "Tutorials Ninja Test Report",
  displayDuration: false,

  metadata: {
    browser: {
      name: "Chromium",
      version: "Latest"
    },
    device: "Jenkins Machine",
    platform: {
      name: "Windows",
      version: "11"
    }
  },

  customData: {
    title: "Execution Information",
    data: [
      { label: "Project", value: "Tutorials Ninja BDD Framework" },
      { label: "Framework", value: "Playwright + Cucumber + TypeScript" },
      { label: "Execution", value: "Jenkins CI/CD" }
    ]
  }
});
