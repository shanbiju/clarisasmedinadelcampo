import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getSupabaseServerClient } from "@/lib/supabase/server"

export default async function HomePage() {
  const supabase = await getSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Clarisas Medina del Campo</h1>
        <p className="text-muted-foreground text-lg">Panadería Artesanal / Artisan Bakery</p>
      </div>

      <div className="flex gap-4">
        {user ? (
          <Link href="/dashboard">
            <Button size="lg">Ir al Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <Button size="lg">Iniciar Sesión</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">
                Registrarse
              </Button>
            </Link>
          </>
        )}
      </div>
    </main>
  )
}
