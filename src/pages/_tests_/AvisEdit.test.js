import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Pour les matchers comme toBeInTheDocument
import AvisEdit from '../AvisEdit';

test('AvisEdit renders without crashing', () => {
  render(<AvisEdit />);
});
