import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const AdminLogin = () => {
  const { t } = useLanguage();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(error.message);
      setLoading(false);
    } else {
      navigate("/admin");
    }
  };

  return (
    <Layout>
      <section className="py-24 md:py-32 bg-background min-h-[70vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h1 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
                {t("admin.login")}
              </h1>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("admin.email")}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="admin@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">{t("admin.password")}</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "..." : t("admin.signin")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
