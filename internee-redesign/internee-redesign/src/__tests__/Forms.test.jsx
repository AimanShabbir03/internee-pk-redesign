import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import FormSection, { check } from '../components/FormSection.jsx';

describe('check()', () => {
  it('validates field types', () => {
    expect(check({ label: 'Email', type: 'email' }, 'bad')).toMatch(/valid email/i);
    expect(check({ label: 'Email', type: 'email' }, 'a@b.pk')).toBe('');
    expect(check({ label: 'Password', type: 'password' }, '123')).toMatch(/8 characters/);
    expect(check({ label: 'Name', type: 'text' }, '  ')).toMatch(/required/);
  });
});

describe('Login form', () => {
  it('shows errors for empty and invalid input', async () => {
    renderApp(<FormSection formKey="signin" />);
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getAllByRole('alert').length).toBeGreaterThan(0);
    await userEvent.type(screen.getByLabelText('Email'), 'nope');
    await userEvent.tab();
    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
  });

  it('shows "Login successful" with valid input', async () => {
    renderApp(<FormSection formKey="signin" />);
    await userEvent.type(screen.getByLabelText('Email'), 'ali@example.com');
    await userEvent.type(screen.getByLabelText('Password'), 'password123');
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(await screen.findByText(/login successful/i)).toBeInTheDocument();
  });
});

describe('Signup form', () => {
  it('shows "Signup successful" with valid input', async () => {
    renderApp(<FormSection formKey="signup" />);
    await userEvent.type(screen.getByLabelText('Full name'), 'Ali Khan');
    await userEvent.type(screen.getByLabelText('Email'), 'ali@example.com');
    await userEvent.type(screen.getByLabelText(/Password/), 'password123');
    await userEvent.click(screen.getByRole('button', { name: 'Sign up' }));
    expect(await screen.findByText(/signup successful/i)).toBeInTheDocument();
  });
});
