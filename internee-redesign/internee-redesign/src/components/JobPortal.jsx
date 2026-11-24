import ListingBoard from './ListingBoard.jsx';

export default function JobPortal() {
  return <ListingBoard noun="jobs" searchLabel="Search job title, company or location…" loader={() => import('../data/jobs.json')} />;
}
