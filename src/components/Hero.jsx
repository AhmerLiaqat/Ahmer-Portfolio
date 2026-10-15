import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap grid">
        <div>
          <div className="eyebrow rise"><span className="dot"></span>{profile.location} · {profile.status}</div>
          <h1 className="rise d1">Ahmer <span className="grad">Liaqat</span></h1>
          <p className="role rise d2">
            ASP.NET developer building <em>ASP.NET Core APIs</em>, <em>ASP.NET MVC</em> applications and <em>ASP.NET Web API</em> services.
          </p>
          <p className="lede rise d3">
            2+ years building and maintaining business applications across the ASP.NET stack: REST APIs on ASP.NET Core and .NET 8,
            ASP.NET MVC web applications, and ASP.NET Web API services on .NET Framework 4.6.1, all backed by SQL Server.
          </p>
          <div className="cta rise d4">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>

        <div className="console" aria-label="Sample API response describing Ahmer">
          <div className="bar">
            <span>
              <span className="lights" aria-hidden="true"><i></i><i></i><i></i></span>
              <b>GET</b> /api/v1/developers/ahmer
            </span>
            <span className="ok">200 OK</span>
          </div>
          <pre>
{'{\n'}
{'  '}<span className="k">"name"</span>: <span className="s">"Ahmer Liaqat"</span>,{'\n'}
{'  '}<span className="k">"role"</span>: <span className="s">"ASP.NET Developer"</span>,{'\n'}
{'  '}<span className="k">"company"</span>: <span className="s">"TEO International"</span>,{'\n'}
{'  '}<span className="k">"experienceYears"</span>: <span className="s">2</span>,{'\n'}
{'  '}<span className="k">"stack"</span>: [{'\n'}
{'    '}<span className="s">"ASP.NET Core Web API"</span>,{'\n'}
{'    '}<span className="s">"ASP.NET MVC"</span>, <span className="s">"ASP.NET Web API"</span>,{'\n'}
{'    '}<span className="s">"C#"</span>, <span className="s">"EF Core"</span>, <span className="s">"SQL Server"</span>{'\n'}
{'  '}],{'\n'}
{'  '}<span className="k">"architecture"</span>: <span className="s">"Hexagonal / Clean"</span>,{'\n'}
{'  '}<span className="k">"certified"</span>: <span className="s">"Azure Fundamentals (AZ-900)"</span>,{'\n'}
{'  '}<span className="k">"available"</span>: <span className="s">true</span>{'\n'}
{'}'}<span className="d"> // 42 ms</span> <span className="cursor"></span>
          </pre>
        </div>
      </div>
    </section>
  )
}
