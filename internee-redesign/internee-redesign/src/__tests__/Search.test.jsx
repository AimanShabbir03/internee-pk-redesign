import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderApp } from '../test/utils.jsx';
import JobPortal from '../components/JobPortal.jsx';
import jobs from '../data/jobs.json';

describe('Job portal search and filters', () => {
  it('loads jobs from JSON (no "No job openings loaded" message)', async () => {
    renderApp(<JobPortal />);
    expect(await screen.findByText(jobs[0].title)).toBeInTheDocument();
    expect(screen.queryByText(/no job openings loaded/i)).not.toBeInTheDocument();
  });

  it('filters by search text', async () => {
    renderApp(<JobPortal />);
    await screen.findByText(jobs[0].title);
    await userEvent.type(screen.getByRole('searchbox'), 'Flutter');
    expect(screen.getByText('Flutter App Developer')).toBeInTheDocument();
    expect(screen.queryByText(jobs[0].title)).not.toBeInTheDocument();
  });

  it('shows an empty state when nothing matches', async () => {
    renderApp(<JobPortal />);
    await screen.findByText(jobs[0].title);
    await userEvent.type(screen.getByRole('searchbox'), 'zzzzqq');
    expect(screen.getByText(/no jobs match/i)).toBeInTheDocument();
  });

  it('filters by category chip', async () => {
    renderApp(<JobPortal />);
    await screen.findByText(jobs[0].title);
    const group = screen.getByRole('group', { name: /filter by category/i });
    await userEvent.click(within(group).getByRole('button', { name: 'Data Science' }));
    expect(screen.getByText('Data Analyst')).toBeInTheDocument();
    expect(screen.queryByText(jobs[0].title)).not.toBeInTheDocument();
  });

  it('opens the apply dialog', async () => {
    renderApp(<JobPortal />);
    await screen.findByText(jobs[0].title);
    await userEvent.click(screen.getAllByRole('button', { name: /apply now/i })[0]);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
