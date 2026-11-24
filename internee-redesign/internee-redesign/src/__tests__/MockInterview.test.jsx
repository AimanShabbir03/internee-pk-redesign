import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import MockInterview, { evaluate } from '../components/MockInterview.jsx';
import questions from '../data/interview.json';

const strong = `${'word '.repeat(40)}built 5 apps because it helped`;

describe('evaluate()', () => {
  it('gives a low score and tips for a short answer', () => {
    const r = evaluate('short');
    expect(r.score).toBe(0);
    expect(r.tips).toHaveLength(4);
  });
  it('gives full marks for a detailed, structured answer', () => {
    const r = evaluate(strong);
    expect(r.score).toBe(10);
    expect(r.tips).toHaveLength(0);
  });
});

describe('MockInterview', () => {
  it('requires an answer before scoring', async () => {
    renderApp(<MockInterview />);
    await userEvent.click(screen.getByRole('button', { name: /start interview/i }));
    await userEvent.click(screen.getByRole('button', { name: /submit answer/i }));
    expect(screen.getByRole('alert')).toHaveTextContent(/write an answer/i);
  });

  it('runs through every question and shows the final score', async () => {
    renderApp(<MockInterview />);
    const role = Object.keys(questions)[0];
    await userEvent.click(screen.getByRole('button', { name: /start interview/i }));
    for (let i = 0; i < questions[role].length; i += 1) {
      expect(screen.getByText(questions[role][i])).toBeInTheDocument();
      await userEvent.type(screen.getByLabelText('Your answer'), 'I built 3 projects because I wanted practice.');
      await userEvent.click(screen.getByRole('button', { name: /submit answer/i }));
      expect(screen.getByText(/Score: \d+\/10/)).toBeInTheDocument();
      await userEvent.click(screen.getByRole('button', { name: i === questions[role].length - 1 ? /finish/i : /next question/i }));
    }
    expect(screen.getByText(/interview complete/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: /practice again/i }));
    expect(screen.getByRole('button', { name: /start interview/i })).toBeInTheDocument();
  });
});
