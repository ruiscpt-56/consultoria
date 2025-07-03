export default function HomePageEN() {
  return (
   <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="p-6 shadow-md flex items-center space-x-4">
        <img src="logo.png" alt="Logo" className="h-10" />
        <h1 className="text-2xl font-bold">Rui Camposinhos | Chartered Civil Engineer</h1>
      </header>

      {/* Hero Section */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Expert Consultancy in Structural and Façade Engineering
        </h2>
        <p className="mb-6 text-lg">
          Safety verification; Innovative technical solutions; reliable reports and detailed studies.
        </p>
        <p className="mb-6 text-lg">
          Over 40 years of experience in higher education, research, and professional consultancy.
        </p>
        <a href="#about" className="px-4 py-2 bg-blue-600 text-white rounded inline-block">
          Learn More
        </a>
      </section>

      {/* About Me */}
      <section id="about" className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="max-w-3xl mx-auto">
          Rui Camposinhos, PhD, with extensive experience in structural engineering, façade engineering, and technical assessments.
        </p>
        <p className="max-w-3xl mx-auto mt-4">
          Providing specialised consultancy for complex projects, forensic engineering, and technical reports supported by laboratory testing and numerical modelling where appropriate.
        </p>
      </section>

      {/* Services */}
      <section className="p-10">
        <h3 className="text-3xl font-semibold mb-6 text-center">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Technical Consultancy</h4>
            <p>Structural analyses, design solutions, and technical optimisation.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Expert Reports & Forensic Analysis</h4>
            <p>Technical assessments, forensic reports, and structural vulnerability analyses.</p>
          </div>
          <div className="border rounded shadow p-4">
            <h4 className="text-xl font-bold mb-2">Technical Studies</h4>
            <p>Feasibility studies, sustainability assessments, and constructive solutions.</p>
          </div>
        </div>
      </section>

      {/* Main Publications */}
      <section className="p-10 bg-white">
        <h3 className="text-3xl font-semibold mb-6 text-center">Main Publications</h3>
        <div className="max-w-4xl mx-auto space-y-6">

          <div>
            <h4 className="text-xl font-bold">Stone Cladding Engineering</h4>
            <p>
              Springer©, International Edition, AZ Dordrecht – The Netherlands<br />
              ISBN: 978-94-007-6847-5<br />
              <a href="https://link.springer.com/book/10.1007/978-94-007-6848-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on Springer
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Natural Stone Cladding with Mechanical Fixings – Design and Project</h4>
            <p>
              Edições Sílabo, 1st Edition, Lisbon<br />
              ISBN: 978-972-618-561-1<br />
              <a href="https://silabo.pt/catalogo/outros-temas/arquitetura-e-urbanismo/livro/revestimentos-em-pedra-natural-com-fixacao-mecanica/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on Sílabo
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Glass Façade Structural Design Manual</h4>
            <p>
              CMM©, Coimbra<br />
              ISBN: 978-94-007-6847-5<br />
              <a href="https://cmm.pt/site/index.php?module=store&target=publicStore&id_category=29&id=184" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on CMM
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Structural Engineering Handbook, 5th Edition</h4>
            <p>
              McGraw-Hill©, Chapters 30 &amp; 33 – Structural Glass / Stone Cladding, New York<br />
              ISBN: 9781260115987<br />
              <a href="https://www.fnac.pt/livre-numerique/a7717497/Structural-Engineering-Handbook-Fifth-Edition" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on FNAC
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Lightweight Slab Design Manual with Prestressed Joists</h4>
            <p>
              FEUPedições©, 1st and 2nd Edition, Porto<br />
              ISBN: 972-752-081-2<br />
              <a href="https://www.booki.pt/loja/prod/lajes-aligeiradas-com-vigotas-pre-tensionadas/9727520812/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View on Booki.pt
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Real Estate Investment Engineering</h4>
            <p>
              Self-published, 1st Edition, Porto, 2025<br />
              ISBN: 978-989-33-6908-1
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold">Real Estate Appraisal</h4>
            <p>
              Livraria de José Alves©, Co-authored, Porto, 2021<br />
              ISBN: 978-989-33-149-4
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="p-10 bg-gray-100">
        <h3 className="text-3xl font-semibold mb-4 text-center">Contact</h3>
        <p className="text-center mt-4">
          Email:{" "}
          <a href="mailto:campozinhos@gmail.com" className="text-blue-600 underline">
            campozinhos@gmail.com
          </a>
        </p>
      </section>

      <footer className="p-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Rui Camposinhos | Civil Engineering Consultancy <br />
        <a href="https://ipp.academia.edu/RuideSousaCamposinhosPhDEURING" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Academia.edu Profile
        </a>
      </footer>
    </div>
  );
}
