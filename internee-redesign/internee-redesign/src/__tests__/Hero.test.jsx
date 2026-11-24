import { screen } from '@testing-library/react';
import { renderApp } from '../test/utils.jsx';
import Hero from '../components/Hero.jsx';

describe('Hero', () => {
  it('shows the headline and working call-to-action links', () => {
    renderApp(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/build skills/i);
    expect(screen.getByRole('link', { name: /our job portal/i })).toHaveAttribute('href', '/jobs');
    expect(screen.getByRole('link', { name: /explore internships/i })).toHaveAttribute('href', '/internship');
  });
});
