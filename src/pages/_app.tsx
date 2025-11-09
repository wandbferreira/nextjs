import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <section>
      <header>
        <Link className="p-4 m-5 block" href="/">
          voltar
        </Link>
      </header>
      <Component {...pageProps} />
    </section>
  );
}
