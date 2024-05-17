import Link from "next/link";
import LoginForm from "../ui/login/loginForm";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

 
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen ">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4   ">
             <Link  href="/" className='block w-10' >
              <ArrowLeftCircleIcon className="h-10 w-10 text-black" title="Inicio" CD />
             </Link>
        <div className="flex h-20 w-full items-end rounded-lg bg-black p-3 md:h-24">
            
          <div className="w-32 text-white md:w-36">
            Mensajeria
          </div>
        </div>
         <LoginForm/>
      </div>
    </main>
  );
}
