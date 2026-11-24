import ListingBoard from './ListingBoard.jsx';

export default function InternshipBoard() {
  return <ListingBoard noun="internships" searchLabel="Search internships…" loader={() => import('../data/internships.json')} />;
}
