interface HeaderProps {
  nome: string;
  formatName: (name: string) => string;
  logged: boolean;
}

export default function Header(props: HeaderProps) {
  return (
    <header
      style={headerStyle(props.nome)}
      className="w-full bg-white shadow p-4 mb-2"
    >
      <h1 className="text-2xl font-bold text-gray-800">
        {props.logged ? (
          <p>Olá, {props.formatName(props.nome)}!</p>
        ) : (
          <p>Olá, visitante!</p>
        )}
      </h1>
    </header>
  );
}

function headerStyle(nome: string) {
  return {
    backgroundColor: nome.startsWith("W") ? "#10B981" : "#3B82F6",
  };
}
