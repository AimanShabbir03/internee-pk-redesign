import { screen } from '@testing-library/react';
import { renderApp } from '../test/utils.jsx';
import Footer from '../components/Footer.jsx';

describe('Footer', () => {
  it('links to internal pages', () => {
    renderApp(<Footer />);
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByRole('link', { name: 'About Us' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'AI Mock Interview' })).toHaveAttribute('href', '/ai-interview');
  });

  it('has labelled social links that open in a new tab', () => {
    renderApp(<Footer />);
    ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].forEach((n) => {
      const a = screen.getByRole('link', { name: n });
      expect(a).toHaveAttribute('target', '_blank');
      expect(a).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
    });
  });

  it('shows the phone number', () => {
    renderApp(<Footer />);
    expect(screen.getByText(/\+92 312 3023645/)).toBeInTheDocument();
  });
});
