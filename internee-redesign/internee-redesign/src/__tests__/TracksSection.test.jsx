import { screen } from '@testing-library/react';
import { renderApp } from '../test/utils.jsx';
import TracksSection from '../components/TracksSection.jsx';

describe('TracksSection', () => {
  it('shows skeletons first, then the carousel loaded from JSON', async () => {
    renderApp(<TracksSection />);
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);
    expect(await screen.findByRole('region', { name: /internship tracks/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /explore web development/i })).toHaveAttribute('href', '/internship?track=Web%20Development');
    expect(screen.getByRole('link', { name: 'Explore internships' })).toHaveAttribute('href', '/internship');
  });
});
