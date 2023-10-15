import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './SideBar';

describe('SideBar', () => {
  it('renders with collapsed className', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar', 'collapsed');
  });

  it('opens and closes', () => {
    render(<Sidebar />);
    const toggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
