import { experience } from '../data.js'

export default function Experience() {
  return (
    <section className="block" id="experience">
      <div className="wrap">
        <div className="sec-head">
          <div className="path">/experience</div>
          <div><h2>Experience</h2></div>
        </div>
        <div className="log">
          {experience.map((job) => (
            <article className="entry" key={job.org}>
              <div className="when">
                {job.when}
                {job.current && (<><br /><span className="now">current</span></>)}
              </div>
              <div>
                <h3>{job.title}</h3>
                <div className="org">{job.org}</div>
                <ul>
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
