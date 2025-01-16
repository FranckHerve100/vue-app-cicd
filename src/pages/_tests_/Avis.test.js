import React from 'react';
import {describe, expect, test} from '@jest/globals';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Avis from '../Avis'; // Assurez-vous que le chemin vers le composant Avis est correct

describe('Avis Component', () => {
  test('renders without crashing', () => {
    render(<Avis />);
    
    // Vérifie si l'élément avec data-testid="avis-root" est présent dans le document
    const avisElement = screen.getByTestId('avis-root');
    expect(avisElement).toBeInTheDocument();
  });
});

