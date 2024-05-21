import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ subsets: ["latin"] });
 
export default async function Page() {


  return (
    <main>
      <h1 className={`${quicksand.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {/* todo */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8 ">
       {/* todo */}
      </div>
    </main>
  );
}