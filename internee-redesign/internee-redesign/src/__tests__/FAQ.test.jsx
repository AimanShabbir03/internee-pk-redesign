import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import FAQ from '../components/FAQ.jsx';
import { faqs } from '../data/faqs.js';

describe('FAQ accordion', () => {
  it('opens one item and closes it again', async () => {
    renderApp(<FAQ />);
    const first = screen.getByRole('button', { name: faqs[0].q });
    const second = screen.getByRole('button', { name: faqs[1].q });
    expect(first).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'true');
    expect(first).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(second);
    expect(second).toHaveAttribute('aria-expanded', 'false');
  });
});
