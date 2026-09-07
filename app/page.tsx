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
        <a className="brand" href="#inicio" aria-label="Início"><span>LM</span><div>Lígia Moreira<small>Nutricionista</small></div></a>
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
          <img src="https://ligiakelly.ntr.br/wp-content/uploads/2024/08/197A7120-3-scaled.jpeg" alt="Dra. Lígia Moreira, nutricionista" />
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

      <footer className="footer"><div className="brand inverse"><span>LM</span><div>Lígia Moreira<small>Nutricionista</small></div></div><p>CRN e informações profissionais a inserir</p><p>© 2026 Lígia Moreira</p></footer>
      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">✦</a>
    </main>
  );
}
