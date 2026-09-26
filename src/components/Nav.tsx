function Nav() {
  return (
    <header className="nav">
      <div className="wrap">
        <a className="logo" href="#top" aria-label="Sidehuset, til toppen">
          <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true">
            <path d="M3 12 13 3l10 9v11H3z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <rect x="8" y="13" width="10" height="2.2" rx="1.1" fill="var(--accent)" />
            <rect x="8" y="17.5" width="6" height="2.2" rx="1.1" fill="currentColor" />
          </svg>
          Sidehuset
        </a>
        <ul>
          <li><a href="#pris">Pris</a></li>
          <li><a href="#forloeb">Forløb</a></li>
          <li><a href="#spoergsmaal">Spørgsmål</a></li>
        </ul>
        <a className="btn btn-primary btn-sm" href="#kontakt">Få et tilbud</a>
      </div>
    </header>
  );
}

export default Nav;
