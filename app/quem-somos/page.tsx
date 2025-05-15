import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function QuemSomos() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige py-8">
        <div className="container">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-center mb-8">
              <Image src="/logo.png" alt="Caldas Fácil" width={150} height={150} />
            </div>

            <h1 className="text-3xl font-bold text-center text-primary-teal mb-6">Quem Somos</h1>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-4">
                O <strong>Caldas Fácil</strong> é uma plataforma inovadora que conecta clientes a prestadores de
                serviços na região de Caldas, MG, de forma rápida e eficiente.
              </p>

              <p className="text-lg mb-4">
                Nossa missão é facilitar o acesso a serviços de qualidade, promovendo o desenvolvimento econômico local
                e valorizando os profissionais da nossa região.
              </p>

              <p className="text-lg mb-6">
                Fundada em 2025, a plataforma já conta com centenas de prestadores cadastrados em diversas categorias,
                desde fotografia e vídeo até desenvolvimento web e mobile.
              </p>

              <h2 className="text-2xl font-bold text-primary-teal mb-4">Nossos Valores</h2>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li className="text-lg">Qualidade e excelência em todos os serviços</li>
                <li className="text-lg">Transparência nas relações com clientes e prestadores</li>
                <li className="text-lg">Valorização dos profissionais locais</li>
                <li className="text-lg">Compromisso com a satisfação do cliente</li>
                <li className="text-lg">Inovação constante na plataforma</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary-teal mb-4">Nossa Equipe</h2>

              <p className="text-lg mb-6">
                Contamos com uma equipe dedicada de profissionais apaixonados por tecnologia e pelo desenvolvimento da
                nossa região. Estamos sempre trabalhando para melhorar a experiência de nossos usuários e expandir as
                oportunidades para os prestadores de serviços.
              </p>

              <h2 className="text-2xl font-bold text-primary-teal mb-4">Contato</h2>

              <p className="text-lg">
                Para mais informações, entre em contato conosco pelo e-mail{" "}
                <a href="mailto:contato@caldasfacil.com.br" className="text-primary-orange hover:underline">
                  contato@caldasfacil.com.br
                </a>{" "}
                ou pelo telefone{" "}
                <a href="tel:+551199222477" className="text-primary-orange hover:underline">
                  (11) 99222-4777
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
