import { screen, fireEvent } from '@testing-library/react';
import { renderForTests } from '@/shared/config/tests/renderForTests';
import { Sidebar } from './SideBar';

describe('SideBar', () => {
  it('renders with collapsed className', () => {
    renderForTests(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar', 'collapsed');
  });

  it('opens and closes', () => {
    renderForTests(<Sidebar />);
    const toggle = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');

    fireEvent.click(toggle);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
