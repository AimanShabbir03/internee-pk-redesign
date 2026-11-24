export default function Skeleton({ count = 3 }) {
  return (
    <div className="grid g3" aria-busy="true" aria-label="Loading">
      {Array.from({ length: count }, (_, i) => <div key={i} className="card skel" data-testid="skeleton" />)}
    </div>
  );
}
