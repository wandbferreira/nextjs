import Header from "@/components/Topo/Topo";
import Link from "next/link";

function getFirstName(nome: string) {
  return nome.split(" ")[0];
}

function getLastName(nome: string) {
  return nome.split(" ")[1];
}

const users = [
  { logged: true, name: "Wanderson Ferreira", formatName: getFirstName },
  { logged: true, name: "Bernardo Ferreira", formatName: getFirstName },
  { logged: true, name: "John Smith", formatName: getLastName },
  { logged: false, name: "Mary Smith", formatName: getLastName },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      {users.map((user, index) => (
        <Header
          key={index}
          logged={user.logged}
          nome={user.name}
          formatName={user.formatName}
        />
      ))}

      <nav>
        <ul className="flex gap-4">
          <li className="font-bold text-lg">
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link
              className="font-bold text-lg"
              href={{
                pathname: "/contato",
                query: { ref: "home" },
              }}
            >
              Contato
            </Link>
          </li>
          <li>
            <Link className="font-bold text-lg" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
