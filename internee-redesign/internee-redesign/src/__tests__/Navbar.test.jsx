import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import Navbar from '../components/Navbar.jsx';

describe('Navbar', () => {
  it('toggles the mobile menu', async () => {
    renderApp(<Navbar />);
    const burger = screen.getByRole('button', { name: /open menu/i });
    expect(burger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(burger);
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('opens and closes a dropdown', async () => {
    renderApp(<Navbar />);
    const btn = screen.getByRole('button', { name: /programs/i });
    await userEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows Login and Sign Up links when logged out', () => {
    renderApp(<Navbar />);
    expect(screen.getByRole('link', { name: 'Login' })).toHaveAttribute('href', '/sign-in');
    expect(screen.getByRole('link', { name: 'Sign Up' })).toHaveAttribute('href', '/sign-up');
  });
});
