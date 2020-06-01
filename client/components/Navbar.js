import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <header className="h-20 p-4">
      <nav className="flex w-full justify-between">
        <h1>Downsville Fire Department</h1>
        <div>
          <FontAwesomeIcon icon="bars" />
        </div>
      </nav>
    </header>
  );
}
