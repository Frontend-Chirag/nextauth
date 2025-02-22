import { Rubik } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Rubik({
  subsets: ["latin"],
  weight: ["600", '300', '400', '500',]
})

export default function Home() {
  return (
    <main className='flex h-full flex-col itmes-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800'>
      <div className="space-y-6 text-center">
        <h1 className={cn(`text-6xl font-semibold text-white drop-shadow-md`, font.className)}>
          Auth
        </h1>
        <p className='text-white text-lg'>A simple authentication service</p>
        <LoginButton >
          <Button variant="secondary" size='lg'>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
