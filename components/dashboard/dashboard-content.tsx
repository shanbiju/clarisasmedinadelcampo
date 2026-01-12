"use client"

import { useRouter } from "next/navigation"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { User } from "@supabase/supabase-js"
import type { Tables, AppRole } from "@/lib/supabase/types"

interface DashboardContentProps {
  user: User
  profile: Tables<"profiles"> | null
  role: AppRole
}

export function DashboardContent({ user, profile, role }: DashboardContentProps) {
  const router = useRouter()
  const supabase = getSupabaseBrowserClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
    router.refresh()
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Bienvenido/a, {profile?.full_name || user.email}</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Perfil / Profile</CardTitle>
              <CardDescription>Tu información de cuenta</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Nombre:</strong> {profile?.full_name || "No especificado"}
              </p>
              <p>
                <strong>Rol:</strong> <span className="capitalize">{role}</span>
              </p>
            </CardContent>
          </Card>

          {role === "admin" && (
            <Card>
              <CardHeader>
                <CardTitle>Administración</CardTitle>
                <CardDescription>Opciones de administrador</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="secondary" className="w-full" onClick={() => router.push("/admin/products")}>
                  Gestionar Productos
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => router.push("/admin/gallery")}>
                  Gestionar Galería
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
  )
}
