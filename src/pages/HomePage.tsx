import { h } from "@lucid/index.ts";
import Layout from "@layout/Layout.tsx";
import Tailwind from "@demo/Tailwind.tsx";

export default function HomePage() {
  return (
    <Layout>
      <header class="mb-12">
        <hgroup class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 pb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Bem-vindo
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explorando ideias, escrevendo código e compartilhando aprendizados
            sobre desenvolvimento web moderno.
          </p>
        </hgroup>
      </header>

      <main>
        <section class="mb-12">
          <blockquote class="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-500 p-6 rounded-r-lg shadow-sm">
            <p class="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
              "Trabalhei para ter só o cansaço Que é hoje em mim uma espécie de
              braço Que ao meu pescoço me sufoca e ampara."
            </p>
            <cite class="text-sm text-gray-500 dark:text-gray-400 font-medium">
              — Álvaro de Campos (heterônimo de Fernando Pessoa)
            </cite>
          </blockquote>
        </section>

        <section class="mb-12 prose prose-lg dark:prose-invert max-w-none">
          <div class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              Um dia acordei pensando: "Sabe do que o mundo precisa? De mais um
              framework web em JavaScript!" — brincadeiras à parte,
              provavelmente não precisamos de mais um… mas eu quis fazer mesmo
              assim. E tem sido uma experiência incrível.
            </p>

            <p>
              O{" "}
              <span class="font-semibold text-blue-600 dark:text-blue-400">
                LucidJS
              </span>{" "}
              nasceu como uma experiência para entender a fundo os mecanismos de
              reatividade e renderização no front-end. Ele é fortemente
              inspirado no SolidJS, adotando uma arquitetura baseada em signals
              para atualizações diretas e precisas no DOM, sem a necessidade de
              Virtual DOM.
            </p>

            <p>
              A biblioteca oferece uma API enxuta e intuitiva: componentes
              declarativos com JSX, um sistema de estado reativo simples e
              eficiente, gerenciamento leve por meio de{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                createStore
              </code>{" "}
              e renderização altamente performática. Tudo isso em um código
              pequeno e legível, ideal para estudar, experimentar e construir
              interfaces reais de forma rápida e previsível.
            </p>

            <p>
              As semelhanças com{" "}
              <span class="font-semibold text-orange-600 dark:text-orange-400">
                SolidJS
              </span>{" "}
              são intencionais e notáveis: ambos utilizam{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                createSignal()
              </code>{" "}
              para reatividade granular,{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                createEffect()
              </code>{" "}
              para side effects,{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                createMemo()
              </code>{" "}
              para computações cachadas e lifecycle hooks como{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                onMount()
              </code>{" "}
              e{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                onCleanup()
              </code>
              . O LucidJS também implementa{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                createContext()
              </code>{" "}
              para gerenciamento de estado global, control flow com{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                Switch/Match
              </code>{" "}
              e até mesmo{" "}
              <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                batch()
              </code>{" "}
              para otimização de atualizações — alcançando cerca de 85% de
              compatibilidade conceitual com a API do SolidJS.
            </p>

            <p>
              O foco do projeto é proporcionar uma experiência fluida de
              desenvolvimento — sem camadas desnecessárias — permitindo criar
              componentes dinâmicos com um modelo mental direto, onde o estado
              guia o DOM de maneira transparente e natural.
            </p>

            <p>
              A ideia não é competir com frameworks consolidados, mas sim{" "}
              <span class="font-medium text-purple-600 dark:text-purple-400">
                explorar, aprender e me divertir criando
              </span>{" "}
              — e, quem sabe, inspirar outras pessoas a fazer o mesmo.
            </p>
          </div>
        </section>

        <section id="tailwind" class="my-8">
          <Tailwind />
        </section>
      </main>
    </Layout>
  );
}
