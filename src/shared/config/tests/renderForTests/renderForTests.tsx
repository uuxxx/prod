import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { renderForTestsProps } from './renderForTestsProps';

export function renderForTests(...args: renderForTestsProps) {
  const [el, options = {}] = args;
  const { route = '/' } = options;
  return render(<MemoryRouter initialEntries={[route]}>{el}</MemoryRouter>);
}
