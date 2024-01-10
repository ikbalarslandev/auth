import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-700 text-white ">
      <Button size="lg" className="bg-red-800">
        hello
      </Button>
    </main>
  );
}
