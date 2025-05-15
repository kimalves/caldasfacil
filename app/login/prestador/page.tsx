import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export default function LoginPrestador() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-grow bg-background-beige flex items-center justify-center py-12">
        <Card className="w-full max-w-md mx-4">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Image src="/logo.png" alt="Caldas Fácil" width={80} height={80} />
            </div>
            <CardTitle className="text-2xl font-bold text-primary-teal">Login Prestador</CardTitle>
            <CardDescription>Acesse sua conta para gerenciar seus serviços</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Senha
                    </label>
                    <Link href="/recuperar-senha" className="text-sm text-primary-teal hover:underline">
                      Esqueceu a senha?
                    </Link>
                  </div>
                  <Input id="password" type="password" />
                </div>
                <Button className="bg-primary-teal hover:bg-primary-teal/90 mt-2">Entrar</Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2">
            <div className="text-sm text-gray-500">
              Não tem uma conta?{" "}
              <Link href="/cadastro/prestador" className="text-primary-teal hover:underline">
                Cadastre-se
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
