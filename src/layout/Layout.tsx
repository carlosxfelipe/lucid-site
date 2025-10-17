import { h } from "@lucid/index.ts";
import Navbar from "@components/Navbar.tsx";
import { useLocation } from "@router/router.tsx";

interface LayoutProps {
  children?: JSX.Element | JSX.Element[];
  showNavbar?: boolean;
}

export default function Layout({
  children = [],
  showNavbar = true,
}: LayoutProps) {
  const location = useLocation();
  const currentPath = location();

  return (
    <div
      class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      style={{ minHeight: "100vh" }}
    >
      {showNavbar && <Navbar currentPath={currentPath} />}

      <div class="container mx-auto px-4 pb-16">
        {children}
      </div>
    </div>
  );
}
