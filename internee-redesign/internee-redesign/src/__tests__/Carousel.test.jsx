import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Carousel from '../components/Carousel.jsx';

const items = Array.from({ length: 6 }, (_, i) => ({ id: i, name: `Item ${i}` }));

describe('Carousel', () => {
  it('moves with arrows and dots', async () => {
    render(<Carousel items={items} autoplay={0} renderItem={(it) => <p>{it.name}</p>} />);
    const dots = screen.getAllByRole('button', { name: /go to slide/i });
    expect(dots[0]).toHaveAttribute('aria-current', 'true');
    await userEvent.click(screen.getByRole('button', { name: /next slide/i }));
    expect(dots[1]).toHaveAttribute('aria-current', 'true');
    await userEvent.click(screen.getByRole('button', { name: /previous slide/i }));
    expect(dots[0]).toHaveAttribute('aria-current', 'true');
  });
});
