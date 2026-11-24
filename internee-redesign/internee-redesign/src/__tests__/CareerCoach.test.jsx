import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import CareerCoach from '../components/CareerCoach.jsx';

const fill = async (user) => {
  await user.type(screen.getByLabelText('Full name'), 'Ali Khan');
  await user.type(screen.getByLabelText('Target role'), 'Frontend Developer');
  await user.type(screen.getByLabelText(/Skills/), 'React, CSS');
  await user.type(screen.getByLabelText(/Experience/), 'Built three small projects.');
};

describe('CareerCoach', () => {
  it('validates required fields', async () => {
    renderApp(<CareerCoach />);
    await userEvent.click(screen.getByRole('button', { name: 'Generate' }));
    expect(screen.getByRole('alert')).toHaveTextContent(/fill name, role, skills/i);
  });

  it('generates a resume summary and copies it', async () => {
    const user = userEvent.setup();
    renderApp(<CareerCoach />);
    await fill(user);
    await user.click(screen.getByRole('button', { name: 'Generate' }));
    const draft = screen.getByLabelText('Your draft');
    expect(draft.value).toContain('Ali Khan');
    expect(draft.value).toContain('React');
    await user.click(screen.getByRole('button', { name: /copy/i }));
    expect(await screen.findByText('Copied')).toBeInTheDocument();
  });

  it('generates a cover letter with the company name', async () => {
    const user = userEvent.setup();
    renderApp(<CareerCoach />);
    await user.click(screen.getByRole('tab', { name: 'Cover letter' }));
    await fill(user);
    await user.type(screen.getByLabelText('Company (optional)'), 'Acme');
    await user.click(screen.getByRole('button', { name: 'Generate' }));
    const draft = screen.getByLabelText('Your draft');
    expect(draft.value).toContain('Dear Hiring Manager');
    expect(draft.value).toContain('Acme');
  });
});
