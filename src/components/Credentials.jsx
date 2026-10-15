import { certifications, education } from '../data.js'

export default function Credentials() {
  return (
    <section className="block" id="credentials">
      <div className="wrap two">
        <div>
          <h3 className="sub">Certifications</h3>
          <ul className="list-rows">
            {certifications.map((c) => (
              <li key={c.title}>
                <div>
                  <strong>{c.badge && <span className="badge">{c.badge}</span>}{c.title}</strong>
                  <span>{c.issuer}</span>
                </div>
                <div className="yr">{c.year}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub">Education</h3>
          <ul className="list-rows">
            {education.map((e) => (
              <li key={e.title}>
                <div><strong>{e.title}</strong><span>{e.place}</span></div>
                <div className="yr">{e.year}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
