import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { testimonials } from '../data/content.js';

describe('Testimonials slider', () => {
  it('shows controls and cycles with next, previous and dots', async () => {
    renderApp(<Testimonials />);
    expect(screen.getByText(`“${testimonials[0].text}”`)).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /^Testimonial \d$/ })).toHaveLength(testimonials.length);

    await userEvent.click(screen.getByRole('button', { name: /next testimonial/i }));
    expect(screen.getByText(`“${testimonials[1].text}”`)).toBeInTheDocument();
    expect(screen.getByText(/sample testimonial: replace/i)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: /previous testimonial/i }));
    await userEvent.click(screen.getByRole('button', { name: /previous testimonial/i }));
    expect(screen.getByText(`“${testimonials[testimonials.length - 1].text}”`)).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: 'Testimonial 1' }));
    expect(screen.getByText(`“${testimonials[0].text}”`)).toBeInTheDocument();
  });
});
