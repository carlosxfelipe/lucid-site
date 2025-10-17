import { h } from "@lucid/index.ts";
import { themeStore } from "@store/theme.ts";
import Icon from "@icons/Icon.tsx";

type Props = { currentPath?: string };

const links = [
  { href: "/", label: "Início" },
  { href: "/contact", label: "Contato" },
];

export default function Navbar({ currentPath = "/" }: Props) {
  return (
    <header class="w-full h-16 flex items-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-3">
      <nav class="container mx-auto px-4 flex items-center">
        {/* Logo */}
        <a href="/" aria-label="Logo" class="flex items-center">
          <Icon name="typescript" size={48} ariaLabel="typescript" />
        </a>

        {/* Links */}
        <ul class="flex items-center gap-4 ml-auto mr-4 p-0 list-none">
          {links.map(({ href, label }) => {
            const active = currentPath === href;
            return (
              <li class="flex items-center">
                <a
                  href={href}
                  aria-current={active ? "page" : undefined}
                  class={active
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Vertical separator */}
        <span class="w-px h-6 bg-gray-200 dark:bg-gray-600 mr-4 flex-shrink-0">
        </span>

        {/* Theme button */}
        <a
          href="#"
          aria-label="Alternar tema"
          title="Alternar tema"
          class="flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            themeStore.getState().toggle();
          }}
        >
          <Icon name="theme-light-dark" size={24} ariaLabel="Alternar tema" />
        </a>
      </nav>
    </header>
  );
}
