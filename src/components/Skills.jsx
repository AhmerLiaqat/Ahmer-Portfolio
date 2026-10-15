import { skills } from '../data.js'

export default function Skills() {
  return (
    <section className="block" id="skills">
      <div className="wrap">
        <div className="sec-head">
          <div className="path">/skills</div>
          <div><h2>Technical skills</h2></div>
        </div>
        <div className="skills">
          {skills.map((s) => (
            <div className="skill" key={s.group}>
              <h4>{s.group}</h4>
              <ul>{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
