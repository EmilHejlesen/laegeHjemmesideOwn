function Hero() {
  return (
    <div className="hero">
      <div className="hero-copy">
        <span className="label">Hjemmesider til små virksomheder</span>
        <h1>En hjemmeside, der er færdig. Og bliver ved med at være det.</h1>
        <p className="lead">
          Vi designer og bygger jeres hjemmeside, sørger for at den kører, og retter i den når noget ændrer sig. I skal bare sende en besked.
        </p>
        <div className="price-line">
          <span><b>5.000 kr.</b> for siden</span>
          <span><b>500 kr./md.</b> for hosting og rettelser</span>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#kontakt">Fortæl os om jeres virksomhed</a>
          <a className="btn btn-ghost" href="#pris">Se hvad der er med</a>
        </div>
      </div>

      <div className="browser" aria-label="Eksempel på en hjemmeside vi har bygget">
        <div className="bar">
          <div className="dots"><i></i><i></i><i></i></div>
          <div className="url">https://<span>bageriet-paa-hjoernet.dk</span></div>
        </div>
        <div className="site">
          <div className="site-top">
            Bageriet på Hjørnet
            <small>
              <span>Brød</span>
              <span>Kager</span>
              <span>Find os</span>
            </small>
          </div>
          <div className="site-hero">
            <h4>Surdejsbrød bagt fra kl. 5 hver morgen</h4>
            <p>Bestil til afhentning dagen før inden kl. 16.</p>
            <div className="loaf"></div>
          </div>
          <div className="site-cols">
            <div><b>Åbningstider</b><span>Man–fre 6–17</span><span>Lør–søn 7–14</span></div>
            <div><b>Adresse</b><span>Nørregade 12</span><span>8000 Aarhus C</span></div>
            <div><b>Ugens kage</b><span>Hindbærsnitte</span><span>28 kr.</span></div>
          </div>
        </div>
        <div className="edit-note">
          <span className="pip"></span>
          <span>Rettelse gennemført: nye åbningstider i julen</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
