export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">Página de Login</h1>

      <form action="">
        <input
          type="text"
          placeholder="Usuário"
          className="border border-gray-300 rounded p-2 mb-4 w-64"
        />
        <br />
        <input
          type="password"
          placeholder="Senha"
          className="border border-gray-300 rounded p-2 mb-4 w-64"
        />
        <br />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded p-2 w-64 hover:bg-blue-600"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
