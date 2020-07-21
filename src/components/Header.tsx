import Link from "next/link";

export function Header() {
  return (
    <header className="bg-orange-600 py-2">
      <nav className="justify-evenly flex min-w-full">
        <NavItem url="/">Top</NavItem>
        <NavItem url="/best">Best</NavItem>
        <NavItem url="/new">New</NavItem>
      </nav>
    </header>
  );
}

interface NavItemProps {
  url: string;
  children: React.ReactNode;
}

function NavItem({ url, children }: NavItemProps) {
  return (
    <Link href={url}>
      <a className="text-white">{children}</a>
    </Link>
  );
}
