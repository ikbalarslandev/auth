import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24   ">
      <LoginButton>
        <Button size="lg" variant="secondary">
          Sign In
        </Button>
      </LoginButton>
    </main>
  );
}
