function Tick() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M2 7.5 5.5 11 12 3.5" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pricing() {
  return (
    <section id="pris" aria-labelledby="pris-h">
      <div className="sec-head">
        <span className="label">Pris</span>
        <h2 id="pris-h">To tal. Det er det hele.</h2>
        <p className="lead">
          Ingen timepriser og ingen overraskelser. I betaler for siden én gang, og derefter en fast månedlig pris.
        </p>
      </div>

      <div className="pricing">
        <div className="plan">
          <span className="label">Engangsbeløb</span>
          <div className="amount"><strong>5.000 kr.</strong><span>for hjemmesiden</span></div>
          <ul className="ticks">
            <li><Tick />Design der passer til jeres virksomhed</li>
            <li><Tick />Virker på mobil, tablet og computer</li>
            <li><Tick />Vi hjælper med tekster og billeder</li>
            <li><Tick />Kontaktformular, kort og åbningstider</li>
            <li><Tick />Opsat så Google kan finde jer</li>
          </ul>
        </div>
        <div className="plan">
          <span className="label">Abonnement</span>
          <div className="amount"><strong>500 kr.</strong><span>om måneden</span></div>
          <ul className="ticks">
            <li><Tick />Hosting: vi holder siden online og hurtig</li>
            <li><Tick />Rettelser: nye priser, tekster, billeder og åbningstider</li>
            <li><Tick />SSL-certifikat (hængelåsen i browseren)</li>
            <li><Tick />Opdateringer og sikkerhedskopier</li>
            <li><Tick />En person I kan skrive direkte til</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
