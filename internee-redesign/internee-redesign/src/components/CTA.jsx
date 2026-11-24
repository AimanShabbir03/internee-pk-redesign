import SmartLink from './SmartLink.jsx';
import { SITE } from '../data/content.js';

export default function CTA() {
  return (
    <section className="sec">
      <div className="container">
        <div className="cta">
          <h2>Unlock new opportunities with top-tier internships</h2>
          <p>Take the first step toward a successful career with Internee.pk.</p>
          <div className="row" style={{ justifyContent: 'center' }}>
            <SmartLink className="btn light lg" to="/graduate-program">Get started now</SmartLink>
            <SmartLink className="btn lg ghost white" to="/internship">Explore internships</SmartLink>
          </div>
        </div>
      </div>
    </section>
  );
}
