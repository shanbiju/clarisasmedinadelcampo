import { redirect } from "next/navigation"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { DashboardContent } from "@/components/dashboard/dashboard-content"

export default async function DashboardPage() {
  const supabase = await getSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  // Fetch user profile and role
  const { data: profile } = await supabase.from("profiles").select("*").eq("user_id", user.id).single()

  const { data: userRole } = await supabase.from("user_roles").select("role").eq("user_id", user.id).single()

  return <DashboardContent user={user} profile={profile} role={userRole?.role || "user"} />
}
