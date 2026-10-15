import { stackCards, facts } from '../data.js'

export default function About() {
  return (
    <section className="block" id="about">
      <div className="wrap">
        <div className="sec-head">
          <div className="path">/about</div>
          <div>
            <h2>From ASP.NET Core APIs to MVC applications</h2>
            <p>
              I work across the full ASP.NET stack. I build new REST APIs on ASP.NET Core and .NET 8, extend ASP.NET MVC applications
              with new features, and maintain ASP.NET Web API services on .NET Framework 4.6.1 that are still running in production.
              Around that I handle authentication and authorization, Entity Framework and Dapper, Hangfire background jobs,
              integrations with Stripe, Twilio and LinkMobility SMS, query optimization, unit testing, and IIS deployment.
            </p>
          </div>
        </div>
        <div className="body-col">
          <div className="stack3">
            {stackCards.map((c) => (
              <div className="sk" key={c.title}>
                <div className="sk-v">{c.tag}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
          <div className="facts">
            {facts.map((f) => (
              <div className="fact" key={f.l}>
                <div className="n">{f.n}</div>
                <div className="l">{f.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
