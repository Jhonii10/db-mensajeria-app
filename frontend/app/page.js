  import Image from "next/image";
  import Link from "next/link";

  export default function Home() {
    return (
      <main className="flex min-h-screen flex-col p-6">
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 md:h-24 text-white">
          Mensajeria
        </div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <p className={`text-xl text-gray-800 md:text-2xl md:leading-normal`}>
               <strong> Bienvenido a mensajería Instantánea.</strong>{' '}
               Estamos aquí para hacer que tus envíos sean más fáciles y rápidos que nunca.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors  md:text-base"
            >
              <span>Ingresar</span> 
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-gray-50 rounded-lg ">
            <Image
              src="/delivery.jpg"
              width={500}
              height={500}
              className="hidden md:block rounded-lg"
              alt="Screenshots of the dashboard project showing desktop version"
            />

            <Image
              src="/delivery.jpg"
              width={500}
              height={500}
              className="block md:hidden rounded-lg"
              alt="Screenshots of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </main>
    );
  }
