import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should be rendered', () => {
    // eslint-disable-next-line
    render(<Button>Test</Button>);

    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
