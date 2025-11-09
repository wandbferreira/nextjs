import { useRouter } from "next/router";

export default function Contato() {
  const router = useRouter();
  const { ref } = router.query;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Pagina de Contato</h1>

      <p>Entre em contato conosco pelo email:</p>

      <p>Você estava em: {ref ?? "23"} </p>
    </main>
  );
}
