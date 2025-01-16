import '@testing-library/jest-dom';
import { jest } from '@jest/globals'; // Assurez-vous d'importer jest

// Mock global pour fetch
// eslint-disable-next-line no-undef
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]), // Valeur par défaut simulée
  })
);

// Nettoyage des mocks après chaque test
// eslint-disable-next-line no-undef
afterEach(() => {
  jest.clearAllMocks();
});
