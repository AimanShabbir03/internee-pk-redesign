import { Link } from 'react-router-dom';
import useAsyncData from '../hooks/useAsyncData.js';
import { iconMap } from '../data/icons.js';
import Carousel from './Carousel.jsx';
import Skeleton from './Skeleton.jsx';

export default function TracksSection() {
  const { status, data, retry } = useAsyncData(() => import('../data/tracks.json'));
  return (
    <section className="sec alt" id="internships">
      <div className="container">
        <div className="head"><span className="pill">Trending</span><h2>Your dream internship is one click away</h2>
          <p>Swipe through in-demand tech tracks and open the one that fits your goals.</p></div>
        {status === 'loading' && <Skeleton />}
        {status === 'error' && <div className="empty"><p>Couldn’t load tracks.</p><button className="btn" onClick={retry}>Try again</button></div>}
        {status === 'ready' && (
          <Carousel label="Internship tracks" items={data} renderItem={({ name, icon, text }) => {
            const Icon = iconMap[icon];
            return (
              <article className="card hover">
                <div className="ico"><Icon /></div><h3>{name}</h3><p>{text}</p>
                <Link className="link" to={`/internship?track=${encodeURIComponent(name)}`}>Explore {name} →</Link>
              </article>
            );
          }} />
        )}
        <p className="c mt"><Link className="btn lg" to="/internship">Explore internships</Link></p>
      </div>
    </section>
  );
}
