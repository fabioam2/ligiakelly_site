import Image from "next/image";

const whatsapp = "https://wa.me/5519989068692?text=Olá%20Dra.%20Lígia,%20gostaria%20de%20agendar%20uma%20consulta.";

const specialties = [
  { n: "01", title: "Saúde da mulher", text: "Cuidado nutricional atento às diferentes fases da vida feminina." },
  { n: "02", title: "Nutrição funcional", text: "Uma visão integrativa para compreender seu corpo e sua rotina." },
  { n: "03", title: "Fertilidade feminina", text: "Estratégias alimentares individualizadas para apoiar seu caminho." },
  { n: "04", title: "Longevidade", text: "Nutrição para atravessar o tempo com mais autonomia e bem-estar." },
];

const testimonials = [
  { tag: "Autoimune", quote: "Em mais de 40 dias de tratamento, tenho percebido significativa melhora e resposta satisfatória do meu corpo no que diz respeito às dores.", author: "M.F." },
  { tag: "Intestino regulado", quote: "Meu intestino voltou a ficar ótimo. Minha disposição na academia é outra e já tenho visto muitos resultados. Sem palavras, só gratidão.", author: "J.M." },
  { tag: "Menopausa", quote: "Hoje estou com 6 quilos a menos e com outra qualidade de vida. Temos por onde, sim. Somos capazes.", author: "M.M." },
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#inicio" aria-label="Início">
          {/* Substituir este monograma pelo logo oficial em SVG/PNG quando disponível. */}
          <span className="brandMark" aria-hidden="true">LM</span>
          <span className="brandName">Lígia Moreira<small>Nutricionista</small></span>
        </a>
        <nav><a href="#sobre">Sobre</a><a href="#especialidades">Especialidades</a><a href="#depoimentos">Depoimentos</a></nav>
        <a className="navCta" href={whatsapp} target="_blank" rel="noreferrer">Agendar consulta</a>
      </header>

      <section className="hero" id="inicio">
        <div className="heroCopy">
          <p className="eyebrow">Nutrição funcional integrativa</p>
          <h1>Seu corpo muda.<br/><em>Seu cuidado também.</em></h1>
          <p className="lead">Nutrição especializada na saúde da mulher, com escuta, ciência e estratégias que respeitam a sua história.</p>
          <div className="actions"><a className="primary" href={whatsapp} target="_blank" rel="noreferrer">Comece sua jornada <span>↗</span></a><a className="textLink" href="#sobre">Conheça meu trabalho ↓</a></div>
          <div className="signature">Cuidado individual <i/> desde 2007</div>
        </div>
        <div className="heroImage" role="img" aria-label="Dra. Lígia Moreira">
          <Image src="/ligia-moreira-hero.jpg" alt="Dra. Lígia Moreira, nutricionista" fill priority sizes="(max-width: 850px) 100vw, 44vw" />
          <div className="imageNote"><b>Nutrição é encontro.</b><span>Entre ciência, corpo e vida.</span></div>
        </div>
      </section>

      <section className="intro" id="sobre">
        <div><p className="eyebrow">Sobre mim</p><h2>Uma escuta atenta para um cuidado <em>realmente seu.</em></h2></div>
        <div className="bio"><p>Sou <strong>Lígia Moreira</strong>, nutricionista funcional integrativa desde 2007, formada pela UNIP e dedicada especialmente à saúde da mulher.</p><p>Com especialização em Geriatria pela Unicamp, pós-graduação em Nutrição Funcional pelo Instituto Valéria Pascoal e formação em Fertilidade Feminina, uno conhecimento clínico e acolhimento para construir caminhos possíveis — sem fórmulas prontas.</p><a href={whatsapp} target="_blank" rel="noreferrer">Converse comigo <span>→</span></a></div>
      </section>

      <section className="specialties" id="especialidades">
        <div className="sectionHead"><p className="eyebrow">Como posso ajudar</p><h2>Nutrição para cada<br/><em>capítulo da sua vida.</em></h2></div>
        <div className="specialtyGrid">{specialties.map((item) => <article key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p><i>↗</i></article>)}</div>
      </section>

      <section className="quoteBand"><span>“</span><p>A vida bem preenchida<br/>torna-se <em>longa.</em></p><small>— Sêneca</small></section>

      <section className="testimonials" id="depoimentos">
        <div className="sectionHead"><p className="eyebrow">Histórias reais</p><h2>Transformações que<br/><em>começam por dentro.</em></h2></div>
        <div className="testimonialGrid">{testimonials.map((item) => <blockquote key={item.tag}><span>{item.tag}</span><p>“{item.quote}”</p><footer>{item.author}<i/></footer></blockquote>)}</div>
      </section>

      <section className="contact">
        <div><p className="eyebrow">Seu próximo passo</p><h2>Vamos cuidar<br/>de você?</h2><p>Agende uma consulta e comece uma relação mais leve e consciente com a sua alimentação.</p><a className="primary light" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <span>↗</span></a></div>
        <div className="address"><span>Consultório</span><p>Av. Dr. Hermas Braga, 540<br/>Nova Campinas — Campinas, SP<br/>13049-252</p><a href="https://maps.google.com/?q=Av.+Dr.+Hermas+Braga,+540,+Campinas,+SP" target="_blank" rel="noreferrer">Ver no mapa ↗</a><small>(19) 98906-8692</small></div>
      </section>

      <footer className="footer"><div className="brand inverse"><span className="brandMark" aria-hidden="true">LM</span><span className="brandName">Lígia Moreira<small>Nutricionista</small></span></div><p>CRN e informações profissionais a inserir</p><p>© 2026 Lígia Moreira</p></footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.45 9.45 0 0 1-4.82-1.32l-.35-.21-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.22 4.25-9.47 9.48-9.47 2.53 0 4.91.99 6.7 2.78a9.41 9.41 0 0 1 2.77 6.7c0 5.22-4.25 9.47-9.47 9.47zm8.06-17.53A11.32 11.32 0 0 0 12.04.63C5.76.63.65 5.74.65 12.02c0 2.01.52 3.97 1.52 5.69L.55 23.6l6.04-1.58a11.37 11.37 0 0 0 5.44 1.38h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.19-5.9-3.33-8.05z"/></svg></a>
    </main>
  );
}
