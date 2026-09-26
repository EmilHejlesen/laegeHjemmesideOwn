import { useState, useRef, FormEvent } from 'react';

const TO = 'hej@sidehuset.dk';

type Need = 'Ny hjemmeside' | 'Ny version af vores nuværende side' | 'Ved ikke endnu';

function Contact() {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState<Need>('Ny hjemmeside');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copyLabel, setCopyLabel] = useState('Kopiér besked');
  const summaryRef = useRef<HTMLPreElement>(null);

  const summary =
    'Navn: ' + name +
    '\nVirksomhed: ' + (company || '-') +
    '\nE-mail: ' + email +
    '\nTelefon: ' + (phone || '-') +
    '\nBehov: ' + need +
    '\n\n' + msg;

  const mailtoHref =
    'mailto:' + TO +
    '?subject=' + encodeURIComponent('Forespørgsel fra ' + (company || name)) +
    '&body=' + encodeURIComponent(summary);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const missing: string[] = [];
    if (!name.trim()) missing.push('navn');
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) missing.push('en gyldig e-mail');
    if (missing.length) {
      setError('Udfyld ' + missing.join(' og ') + ', så vi kan svare jer.');
      return;
    }
    setError('');
    setSubmitted(true);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyLabel('Kopieret');
    } catch {
      const pre = summaryRef.current;
      const sel = window.getSelection();
      if (pre && sel) {
        const rg = document.createRange();
        rg.selectNodeContents(pre);
        sel.removeAllRanges();
        sel.addRange(rg);
      }
      setCopyLabel('Markeret, tryk Ctrl+C');
    }
    setTimeout(() => setCopyLabel('Kopiér besked'), 2200);
  }

  return (
    <section id="kontakt" aria-labelledby="kontakt-h">
      <div className="contact">
        <div className="contact-side">
          <span className="label">Kontakt</span>
          <h2 id="kontakt-h">Fortæl os om jeres virksomhed</h2>
          <p className="lead">
            Udfyld formularen, så vender vi tilbage med et forslag til, hvordan jeres side kunne se ud.
          </p>
          <div className="contact-card">
            <span className="label">E-mail</span>
            <span className="v" id="mail-addr">hej@sidehuset.dk</span>
          </div>
          <div className="contact-card">
            <span className="label">Telefon</span>
            <span className="v">+45 12 34 56 78</span>
          </div>
        </div>

        <div>
          {!submitted && (
            <form id="form" noValidate onSubmit={handleSubmit}>
              <div className="row">
                <div className="field">
                  <label htmlFor="f-name">Navn</label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Maria Holm"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-company">Virksomhed</label>
                  <input
                    id="f-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Holms Blomster"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label htmlFor="f-email">E-mail</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="navn@firma.dk"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="f-phone">Telefon (valgfri)</label>
                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <fieldset className="fieldset">
                <legend>Hvad har I brug for?</legend>
                <div className="chips">
                  <label className="chip">
                    <input
                      id="c-new"
                      type="radio"
                      name="need"
                      value="Ny hjemmeside"
                      checked={need === 'Ny hjemmeside'}
                      onChange={() => setNeed('Ny hjemmeside')}
                    />
                    <span>Ny hjemmeside</span>
                  </label>
                  <label className="chip">
                    <input
                      id="c-redo"
                      type="radio"
                      name="need"
                      value="Ny version af vores nuværende side"
                      checked={need === 'Ny version af vores nuværende side'}
                      onChange={() => setNeed('Ny version af vores nuværende side')}
                    />
                    <span>Ny version af vores nuværende side</span>
                  </label>
                  <label className="chip">
                    <input
                      id="c-unsure"
                      type="radio"
                      name="need"
                      value="Ved ikke endnu"
                      checked={need === 'Ved ikke endnu'}
                      onChange={() => setNeed('Ved ikke endnu')}
                    />
                    <span>Ved ikke endnu</span>
                  </label>
                </div>
              </fieldset>
              <div className="field">
                <label htmlFor="f-msg">Fortæl kort om jer</label>
                <textarea
                  id="f-msg"
                  name="msg"
                  placeholder="Fx: Vi er en lille blomsterbutik i Odense og vil gerne have en side med åbningstider, buketter og mulighed for at bestille til levering."
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                />
              </div>
              {error && <p className="err">{error}</p>}
              <div><button className="btn btn-primary" type="submit">Send forespørgsel</button></div>
            </form>
          )}

          {submitted && (
            <div className="done">
              <h3>Næsten færdig</h3>
              <p>
                Send beskeden herunder til <b>hej@sidehuset.dk</b>, så vender vi tilbage inden for et par hverdage. Knappen åbner jeres mailprogram, hvis det er muligt. Ellers kan I kopiere teksten.
              </p>
              <pre ref={summaryRef}>{summary}</pre>
              <div className="acts">
                <a className="btn btn-primary btn-sm" href={mailtoHref}>Åbn i mail</a>
                <button className="btn btn-ghost btn-sm" type="button" onClick={handleCopy}>{copyLabel}</button>
                <button className="btn btn-ghost btn-sm" type="button" onClick={() => setSubmitted(false)}>Ret formularen</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
