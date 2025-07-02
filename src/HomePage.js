export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
  <header className="p-6 shadow-md flex items-center space-x-4">
  <img src="logo.png" alt="Logótipo" className="h-10" />
  <h1 className="text-2xl font-bold">Rui Camposinhos | Engenheiro Conselheiro pela Ordem dos Engenheiros</h1>
</header>

    {/* Hero Section */}
<section className="p-10 text-center">
  <h2 className="text-4xl font-bold mb-4">Consultoria Especialização em Engenharia de Estruturas, de Fachadas</h2>
  <p className="mb-6 text-lg">Soluções técnicas, pareceres e projectos com rigor e experiência.</p>
  <a href="#sobre" className="px-4 py-2 bg-blue-600 text-white rounded inline-block">Saiba Mais</a>

 </section>

      {/* Sobre Mim */}
      <section id="sobre" className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold mb-4">Sobre Mim</h3>
        <p className="max-w-3xl mx-auto">
          Eng. Rui Camposinhos, PhD, com vasta experiência em engenharia de estruturas, engenharia de fachadas e avaliações técnicas,
          presta serviços de consultoria especializada em projectos complexos, perícias judiciais ou pareceres com suporte em ensaios laboratoriais sempre que adequado, e estudos técnicos.
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