import { projects } from '../data.js'

export default function Projects() {
  return (
    <section className="block" id="projects">
      <div className="wrap">
        <div className="sec-head">
          <div className="path">/projects</div>
          <div>
            <h2>Projects</h2>
            <p>ASP.NET Core APIs, ASP.NET MVC and Web API applications I've built or maintained. Live sites are marked 200.</p>
          </div>
        </div>
        <div className="endpoints">
          {projects.map((p) => (
            <article className={`ep${p.wide ? ' wide' : ''}`} key={p.title}>
              <div className="route">
                <span className="verb">{p.verb}</span>{p.route}
                {p.url && <span className="code200">200 · live</span>}
              </div>
              <h3>
                {p.url
                  ? <a href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
                  : p.title}
              </h3>
              <p>{p.summary}</p>
              {p.points.length > 0 && (
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
              )}
              <div className="tags">
                {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
              {p.url && (
                <a className="visit" href={p.url} target="_blank" rel="noopener noreferrer">{p.linkLabel} ↗</a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
