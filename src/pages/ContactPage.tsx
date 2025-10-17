import { h } from "@lucid/index.ts";
import Icon from "@icons/Icon.tsx";
import Layout from "@layout/Layout.tsx";

export default function ContactPage() {
  return (
    <Layout>
      <header class="mb-8">
        <hgroup class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 pb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Contato
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sou Carlos Felipe Araújo, desenvolvedor Mobile e Front-end.
          </p>
        </hgroup>
      </header>

      <ul class="list-none p-0 m-0 grid gap-3 mt-8">
        <li class="flex items-center gap-2">
          <Icon name="email" size={20} aria-hidden="true" />
          <span>
            Email:{" "}
            <a
              href="mailto:carlosxfelipe@gmail.com"
              class="text-blue-600 hover:underline"
            >
              carlosxfelipe@gmail.com
            </a>
          </span>
        </li>

        <li class="flex items-center gap-2">
          <Icon name="github" size={20} aria-hidden="true" />
          <span>
            GitHub:{" "}
            <a
              href="https://github.com/carlosxfelipe"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline"
            >
              github.com/carlosxfelipe
            </a>
          </span>
        </li>

        <li class="flex items-center gap-2">
          <Icon name="linkedin" size={20} aria-hidden="true" />
          <span>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/carlosxfelipe"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline"
            >
              linkedin.com/in/carlosxfelipe
            </a>
          </span>
        </li>

        <li class="flex items-center gap-2">
          <Icon name="whatsapp" size={20} aria-hidden="true" />
          <span>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5585999502195"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline"
            >
              (85) 99950-2195
            </a>
          </span>
        </li>

        <li class="flex items-center gap-2">
          <Icon name="map-marker-outline" size={20} aria-hidden="true" />
          <span>Fortaleza, Ceará, Brasil</span>
        </li>
      </ul>
    </Layout>
  );
}
