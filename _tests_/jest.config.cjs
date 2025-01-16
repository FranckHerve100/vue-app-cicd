module.exports = {
  testEnvironment: 'jsdom',  // Utilisation de jsdom pour le test des composants React/Vue.js
  reporters: [
    'default',  // Rapport classique de Jest
    [
      'jest-html-reporter',  // Utilisation de jest-html-reporter pour générer un rapport HTML
      {
        pageTitle: 'Rapport des Tests',
        outputPath: './reports/test-report.html',  // Chemin du rapport HTML généré
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};
