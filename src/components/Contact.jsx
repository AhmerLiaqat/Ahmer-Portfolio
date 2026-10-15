import { useState } from 'react'
import { profile } from '../data.js'

function CopyLine({ label, value, href }) {
  const [state, setState] = useState('Copy')

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setState('Copied')
    } catch {
      setState('Failed')
    }
    setTimeout(() => setState('Copy'), 1600)
  }

  return (
    <div className="cline">
      <div>
        <div className="lbl">{label}</div>
        <a className="val" href={href}>{value}</a>
      </div>
      <button className="copy" type="button" onClick={copy}>{state}</button>
    </div>
  )
}

function LinkLine({ label, text, href }) {
  return (
    <div className="cline">
      <div>
        <div className="lbl">{label}</div>
        <a className="val" href={href} target="_blank" rel="noopener noreferrer">{text}</a>
      </div>
      <span className="copy" aria-hidden="true">↗</span>
    </div>
  )
}

export default function Contact() {
  return (
    <section className="block" id="contact">
      <div className="wrap">
        <div className="sec-head">
          <div className="path">/contact</div>
          <div>
            <h2>Let's build your next API</h2>
            <p>Available for backend roles and .NET API projects. Email is the fastest way to reach me.</p>
          </div>
        </div>
        <div className="contact">
          <CopyLine label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <CopyLine label="Phone" value={profile.phone} href={`tel:${profile.phone.replace(/\s/g, '')}`} />
          <LinkLine label="LinkedIn" text={profile.linkedinLabel} href={profile.linkedin} />
          <LinkLine label="GitHub" text={profile.githubLabel} href={profile.github} />
        </div>
      </div>
    </section>
  )
}
