export default function HomePage() {
  return (
   <div className="min-h-screen bg-gray-900 text-gray-100">
<header className="p-6 shadow-md flex items-center justify-between w-full">
  <div className="flex items-center space-x-4">
    <img src="logo.png" alt="Logótipo" className="h-10" />
    <h1 className="text-2xl font-bold">Rui Camposinhos | Engenheiro Conselheiro pela Ordem dos Engenheiros</h1>
  </div>
  <a href="/en" className="text-blue-600 underline hover:font-semibold">English</a>
</header>


    {/* Hero Section */}
<section className="p-10 text-center">
  <h2 className="text-4xl font-bold mb-4">
    Consultoria Especialização em Engenharia de Estruturas, e de Fachadas
  </h2>
  <p className="mb-6 text-lg">
    Verificação da Segurança; Soluções técnicas inovadoras; pareceres com rigor e estudos detalhados.
  </p>
  <p className="mb-6 text-lg">
    Mais de 40 anos de experiência no ensino superior, investigação e prestação de serviços.
  </p>
  <a href="#sobre" className="px-4 py-2 bg-blue-600 text-white rounded inline-block">
    Saiba Mais
  </a>
</section>
    {/* Sobre Mim */}
<section id="sobre" className="p-10 bg-gray-100">
  <h3 className="text-3xl font-semibold mb-4">Sobre Mim</h3>
  <p className="max-w-3xl mx-auto">
    Eng. Rui Camposinhos, PhD, com vasta experiência em engenharia de estruturas, engenharia de fachadas e avaliações técnicas.
  </p>
  <p className="max-w-3xl mx-auto mt-4">
    Prestação de serviços de consultoria especializada em projectos complexos, perícias judiciais ou pareceres com suporte em ensaios laboratoriais e modelação computacional sempre que adequado.
  </p>
</section>

      {/* Serviços */}
      <section className="p-10">
        <h3 className="text-3xl font-semibold mb-6 text-center">Serviços</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Consultoria Técnica</h4>
            <p>Análises estruturais, projectos e optimização de soluções.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Pareceres e Perícias</h4>
            <p>Avaliações técnicas, relatórios periciais e análises de vulnerabilidade estrutural.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Estudos Técnicos</h4>
            <p>Estudos de viabilidade, sustentabilidade e soluções construtivas.</p>
          </div>
        </div>
      </section>
{/* Publicações Principais */}
<section className="p-10 bg-white">
  <h3 className="text-3xl font-semibold mb-6 text-center">Publicações Principais</h3>
  <div className="max-w-4xl mx-auto space-y-6">

    <div>
      <h4 className="text-xl font-bold">Stone Cladding Engineering</h4>
      <p>
        Springer©, International Edition, AZ Dordrecht – Países Baixos<br />
        ISBN: 978-94-007-6847-5<br />
        <a href="https://link.springer.com/book/10.1007/978-94-007-6848-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver na Springer
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Revestimentos em Pedra Natural com Fixação Mecânica – Dimensionamento e Projecto</h4>
      <p>
        Edições Sílabo, 1.ª Edição, Lisboa<br />
        ISBN: 978-972-618-561-1<br />
        <a href="https://silabo.pt/catalogo/outros-temas/arquitetura-e-urbanismo/livro/revestimentos-em-pedra-natural-com-fixacao-mecanica/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver na Sílabo
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Manual de Dimensionamento de Fachadas Envidraçadas: Comportamento Estrutural</h4>
      <p>
        CMM©, Coimbra<br />
        ISBN: 978-94-007-6847-5<br />
        <a href="https://cmm.pt/site/index.php?module=store&target=publicStore&id_category=29&id=184" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver no CMM
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Structural Engineering Handbook, 5.ª Edição</h4>
      <p>
        McGraw-Hill©, Capítulos 30 e 33 – Structural Glass / Stone Cladding, Nova Iorque<br />
        ISBN: 9781260115987<br />
        <a href="https://www.fnac.pt/livre-numerique/a7717497/Structural-Engineering-Handbook-Fifth-Edition" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver na FNAC
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Manual de Dimensionamento de Lajes Aligeiradas com Vigotas Pré-tensionadas</h4>
      <p>
        FEUPedições©, 1.ª e 2.ª Edição, Porto<br />
        ISBN: 972-752-081-2<br />
        <a href="https://www.booki.pt/loja/prod/lajes-aligeiradas-com-vigotas-pre-tensionadas/9727520812/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Ver na Booki.pt
        </a>
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Engenharia de Investimentos Imobiliários</h4>
      <p>
        Edição dos Autores, 1.ª Edição, Porto, 2025<br />
        ISBN: 978-989-33-6908-1
      </p>
    </div>

    <div>
      <h4 className="text-xl font-bold">Avaliação Imobiliária</h4>
      <p>
        Livraria de José Alves©, Co-autoria, Porto, 2021<br />
        ISBN: 978-989-33-149-4
      </p>
    </div>

  </div>
</section>

      {/* Contacto */}
     <section className="p-10 bg-gray-100">
  <h3 className="text-3xl font-semibold mb-4 text-center">Contacte-me</h3>
  <p className="text-center mt-4">
    Contacto:{" "}
    <a href="mailto:campozinhos@gmail.com" className="text-blue-600 underline">
      campozinhos@gmail.com
    </a>
  </p>
</section>

  <footer className="p-6 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} Rui Camposinhos | Consultoria de Engenharia Civil <br />
  <a href="https://ipp.academia.edu/RuideSousaCamposinhosPhDEURING" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
    Perfil no Academia.edu
  </a>
</footer>
    </div>
  );
}