function Faq() {
  return (
    <section id="spoergsmaal" aria-labelledby="faq-h">
      <div className="sec-head">
        <span className="label">Spørgsmål</span>
        <h2 id="faq-h">Det bliver vi tit spurgt om</h2>
      </div>
      <div className="faq">
        <details open>
          <summary>Hvad tæller som en rettelse?</summary>
          <p>Alt det, der ændrer sig i en almindelig hverdag: nye priser, ændrede åbningstider, et nyt billede, en ny medarbejder eller et tilbud på forsiden. Skriv til os, så klarer vi det. Større ting som en helt ny sektion aftaler vi på forhånd.</p>
        </details>
        <details>
          <summary>Skal vi selv have et domæne?</summary>
          <p>Har I allerede et, bruger vi det. Har I ikke, hjælper vi med at finde og registrere et, der passer til jeres navn.</p>
        </details>
        <details>
          <summary>Kan vi selv redigere siden?</summary>
          <p>Det behøver I ikke. Rettelser er med i abonnementet, så I sender bare en besked med det, der skal ændres.</p>
        </details>
        <details>
          <summary>Hvad hvis vi vil stoppe abonnementet?</summary>
          <p>Så siger I op. Vi aftaler vilkårene, når vi laver aftalen, så I ved præcis, hvad der gælder, inden I går i gang.</p>
        </details>
        <details>
          <summary>Hvor lang tid tager det?</summary>
          <p>Det afhænger mest af, hvor hurtigt tekster og billeder er klar. Vi giver jer en dato ved første samtale.</p>
        </details>
      </div>
    </section>
  );
}

export default Faq;
