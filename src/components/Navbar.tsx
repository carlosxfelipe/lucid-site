import { h } from "@lucid/index.ts";
import { themeStore } from "@store/theme.ts";
import Icon from "@icons/Icon.tsx";
import Logo from "@components/Logo.tsx";
import type { IconName } from "@icons/paths.ts";

type Props = { currentPath?: string };

const links: Array<{ href: string; label: string; icon: IconName }> = [
  { href: "/", label: "Início", icon: "home-outline" },
  { href: "/start", label: "Get started", icon: "pokeball" },
  { href: "/demo", label: "Demo", icon: "package-variant" },
  { href: "/contact", label: "Contato", icon: "email" },
];

export default function Navbar({ currentPath = "/" }: Props) {
  return (
    <header class="w-full h-16 flex items-center border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mb-3">
      <nav class="container mx-auto px-4 flex items-center">
        {/* Logo */}
        <Logo />

        {/* Links */}
        <ul class="flex items-center gap-4 ml-auto mr-4 p-0 list-none">
          {links.map(({ href, label, icon }) => {
            const active = currentPath === href;
            return (
              <li class="flex items-center">
                <a
                  href={href}
                  aria-current={active ? "page" : undefined}
                  class={`flex items-center gap-2 ${
                    active
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  <Icon name={icon} size={20} ariaLabel={label} />
                  <span class="hidden md:inline">{label}</span>
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
