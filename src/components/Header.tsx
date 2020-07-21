import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
  return (
    <header className="bg-orange-600">
      <nav className="justify-evenly flex w-full">
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
  const isActive = useIsActive(url);
  let classes = "text-white flex-1 text-center h-full py-2";
  if (isActive) {
    classes += " bg-orange-700";
  }

  return (
    <Link href={url}>
      <a className={classes}>{children}</a>
    </Link>
  );
}

function useIsActive(path: string) {
  const router = useRouter();
  return router.pathname === path;
}
