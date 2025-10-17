import { h } from "@lucid/index.ts";
import Layout from "@layout/Layout.tsx";
import Icon from "@icons/Icon.tsx";

export default function StartPage() {
  const lucidCDN =
    "https://cdn.jsdelivr.net/gh/carlosxfelipe/lucidjs@main/cdn/lucid.js";
  const lucidCDNMin =
    "https://cdn.jsdelivr.net/gh/carlosxfelipe/lucidjs@main/cdn/lucid.min.js";

  const importESM = `import * as Lucid from 
  "https://cdn.jsdelivr.net/gh/carlosxfelipe/lucidjs@main/cdn/lucid.min.js";`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const CodeBlock = ({ code }: { code: string }) => (
    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 my-4 overflow-hidden">
      <pre class="text-sm text-gray-100 whitespace-pre-wrap break-all">
        <code class="break-all">{code}</code>
      </pre>
      <button
        type="button"
        onClick={() => copyToClipboard(code)}
        class="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
        title="Copiar código"
      >
        <Icon name="content-copy" size={16} ariaLabel="Copiar" />
      </button>
    </div>
  );

  const fullExample = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Contador Interativo com Lucid.js</title>
    <style>
      :root {
        --bg: #fff;
        --fg: #111;
        --muted: #666;
        --border: #e5e7eb;
        --primary: #2563eb;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        font: 16px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
        color: var(--fg);
        background: var(--bg);
      }
      .container { max-width: 640px; margin: 0 auto; padding: 16px; }
      .card { border: 1px solid var(--border); border-radius: 12px; padding: 16px; }
      h1, h2 { text-align: center; margin: 0 0 .75rem; }
      .btn {
        appearance: none;
        border: 1px solid var(--border);
        background: #fff;
        padding: .5rem .75rem;
        border-radius: .5rem;
        cursor: pointer;
        transition: filter .15s ease;
      }
      .btn:hover { filter: brightness(0.98); }
      .btn--primary { background: var(--primary); border-color: var(--primary); color: #fff; }
      .btn--danger { background: #ef4444; border-color: #ef4444; color: #fff; }
      .group-grid[role="group"] {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: .5rem;
        margin: .75rem 0;
      }
      .muted { color: var(--muted); text-align: center; }
      .tags {
        display: flex; gap: .25rem; flex-wrap: wrap;
        justify-content: center; margin-top: .5rem;
      }
      .tag {
        display: inline-block;
        padding: .25rem .5rem;
        border: 1px solid var(--border);
        border-radius: .25rem;
        font-size: .875rem;
      }
      @media (min-width: 600px) {
        .group-grid[role="group"] {
          grid-template-columns: repeat(4, auto);
          justify-content: center;
        }
      }
    </style>
  </head>

  <body>
    <main class="container">
      <h1>Contador Interativo</h1>
      <div id="app"></div>
    </main>

    <script type="module">
      // import * as Lucid from "./lucid.min.js";
      import * as Lucid from 
        "https://cdn.jsdelivr.net/gh/carlosxfelipe/lucidjs@main/cdn/lucid.min.js";
      const { h, mount, createSignal, createMemo, Show, For, batch } = Lucid;

      const App = () => {
        const [count, setCount] = createSignal(0);
        const doubled = createMemo(() => count() * 2);
        const plusTwo = () => batch(() => { setCount(c => c + 1); setCount(c => c + 1); });

        return h(
          "article",
          { class: "card" },
          h("header", null, h("h2", null, "Contador")),
          h("p", null, "Valor: ", count, " • Dobro: ", doubled),
          h(
            "div",
            { role: "group", class: "group-grid" },
            h("button", { class: "btn", onClick: () => setCount(c => Math.max(0, c - 1)) }, "−1"),
            h("button", { class: "btn btn--primary", onClick: () => setCount(c => c + 1) }, "+1"),
            h("button", { class: "btn btn--primary", onClick: plusTwo }, "+2 (batch)"),
            h("button", { class: "btn btn--danger", onClick: () => setCount(0) }, "reset"),
          ),
          Show({
            when: () => count() > 0,
            children: h("p", { class: "muted" }, "Listando itens de 0 até ", count),
          }),
          h(
            "div",
            { class: "tags" },
            For({
              each: () => Array.from({ length: count() }, (_, i) => i),
              children: (i) => h("span", { class: "tag" }, String(i)),
            }),
          ),
        );
      };

      mount(h(App), document.querySelector("#app"));
    </script>
  </body>
</html>
`;

  return (
    <Layout>
      <header class="mb-12">
        <hgroup class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 pb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Getting Started
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Guia rápido para iniciar com o Lucid.js.
          </p>
        </hgroup>
      </header>

      <main class="max-w-4xl mx-auto px-4">
        <section id="intro" class="mb-12 text-center">
          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Você pode usufruir do{" "}
            <strong class="text-gray-900 dark:text-white">Lucid.js</strong>{" "}
            de duas maneiras:
            <br />
            <strong class="text-blue-600 dark:text-blue-400">1.</strong>{" "}
            Diretamente via{" "}
            <em class="text-purple-600 dark:text-purple-400">CDN</em>{" "}
            — ideal para testes rápidos ou uso em páginas estáticas.
            <br />
            <strong class="text-blue-600 dark:text-blue-400">2.</strong>{" "}
            Localmente — instalando o{" "}
            <strong class="text-gray-900 dark:text-white">Deno</strong>{" "}
            e executando o projeto completo.
          </p>

          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Abaixo você encontra instruções rápidas para ambos os modos: usar o
            CDN para importação imediata ou preparar seu ambiente Deno com a
            extensão do VSCode e o repositório oficial.
          </p>
        </section>

        <section id="getting-started" class="space-y-12">
          <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <header class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Usar via CDN
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Você também pode importar o{" "}
                <strong class="text-gray-900 dark:text-white">Lucid.js</strong>
                {" "}
                direto do CDN (ES modules). Abaixo estão os links com opção de
                copiar:
              </p>
            </header>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  lucid.js (não minificado)
                </h4>
                <CodeBlock code={lucidCDN} />
              </div>

              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  lucid.min.js (minificado)
                </h4>
                <CodeBlock code={lucidCDNMin} />
              </div>

              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Import ES Module
                </h4>
                <CodeBlock code={importESM} />
              </div>

              <details class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <summary class="cursor-pointer text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                  <strong>Exemplo completo (HTML)</strong>
                </summary>
                <div class="mt-4">
                  <CodeBlock code={fullExample} />
                </div>
              </details>
            </div>
          </article>

          <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <header class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Instalar o Deno
              </h3>
              <p class="text-orange-600 dark:text-orange-400 font-medium mb-4">
                Requer Deno <strong>2.5+</strong>.
              </p>
              <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  O <strong class="text-gray-900 dark:text-white">Deno</strong>
                  {" "}
                  é um <em class="text-blue-600 dark:text-blue-400">runtime</em>
                  {" "}
                  para JavaScript e TypeScript, criado por{" "}
                  <strong class="text-gray-900 dark:text-white">
                    Ryan Dahl
                  </strong>{" "}
                  — o mesmo criador do{" "}
                  <strong class="text-gray-900 dark:text-white">
                    Node.js
                  </strong>. Ele surgiu como uma alternativa moderna ao Node,
                  com foco em
                  <strong class="text-green-600 dark:text-green-400">
                    segurança
                  </strong>,{" "}
                  <strong class="text-green-600 dark:text-green-400">
                    simplicidade
                  </strong>{" "}
                  e
                  <strong class="text-green-600 dark:text-green-400">
                    suporte nativo a TypeScript
                  </strong>, competindo diretamente com
                  <strong class="text-gray-900 dark:text-white">Node.js</strong>
                  {" "}
                  e <strong class="text-gray-900 dark:text-white">Bun</strong>.
                </p>
                <p>
                  Neste projeto, o Deno é usado não apenas para executar o
                  servidor local, mas também para{" "}
                  <strong class="text-purple-600 dark:text-purple-400">
                    gerar o bundle de produção
                  </strong>. A tarefa{" "}
                  <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                    deno task bundle
                  </code>{" "}
                  empacota o código e prepara os arquivos otimizados na pasta
                  {" "}
                  <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                    dist/
                  </code>, prontos para deploy.
                </p>
              </div>
            </header>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  macOS / Linux (Shell)
                </h4>
                <CodeBlock
                  code={`curl -fsSL https://deno.land/install.sh | sh`}
                />
              </div>

              <div>
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Windows (PowerShell)
                </h4>
                <CodeBlock code={`irm https://deno.land/install.ps1 | iex`} />
              </div>
            </div>

            <footer class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <a
                href="https://docs.deno.com/runtime/manual/getting_started/installation"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Docs de Instalação
              </a>
              <small class="block mt-2 text-gray-600 dark:text-gray-400">
                Verifique com{" "}
                <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                  deno --version
                </code>.
              </small>
            </footer>
          </article>

          <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <header class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Extensão VSCode: Deno (denoland.vscode-deno)
              </h3>
            </header>

            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Fornece tipagem, lint/format e execução integrada para projetos
              Deno.
            </p>

            <div class="mb-6">
              <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Como instalar
              </h4>
              <ol class="space-y-2 text-gray-600 dark:text-gray-300 pl-6">
                <li class="flex items-center">
                  <span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    1
                  </span>
                  Abrir o VSCode
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    2
                  </span>
                  Ir em{" "}
                  <kbd class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mx-1">
                    View
                  </kbd>
                  {" → "}
                  <kbd class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm mx-1">
                    Extensions
                  </kbd>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    3
                  </span>
                  Pesquisar por{" "}
                  <strong class="text-gray-900 dark:text-white">Deno</strong>
                </li>
                <li class="flex items-center">
                  <span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    4
                  </span>
                  Instalar{" "}
                  <em class="text-purple-600 dark:text-purple-400">
                    denoland.vscode-deno
                  </em>
                </li>
              </ol>
            </div>

            <footer class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <a
                href="https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Abrir no Marketplace
              </a>
              <small class="block mt-2 text-gray-600 dark:text-gray-400">
                Ative o workspace Deno conforme solicitado pela extensão.
              </small>
            </footer>
          </article>

          <article class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <header class="mb-6">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Clonar &amp; Rodar
              </h3>
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                Repositório oficial:{" "}
                <a
                  href="https://github.com/carlosxfelipe/lucid"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  github.com/carlosxfelipe/lucid
                </a>
              </p>
            </header>

            <div class="space-y-6">
              <div>
                <p class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Clonar o repositório:
                </p>
                <CodeBlock
                  code={`git clone git@github.com:carlosxfelipe/lucid.git
cd lucid`}
                />
              </div>

              <div>
                <p class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Rodar o projeto:
                </p>
                <CodeBlock code={`deno task start`} />
                <small class="block mt-2 text-gray-600 dark:text-gray-400">
                  Executa limpeza, gera bundle e inicia em{" "}
                  <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                    http://localhost:8000
                  </code>.
                </small>
              </div>
            </div>

            <footer class="flex flex-wrap gap-3 mt-6">
              <a
                href="https://github.com/carlosxfelipe/lucid"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Ver repositório
              </a>
              <a
                href="https://github.com/carlosxfelipe/lucid/tree/main/docs"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Ler a documentação
              </a>
            </footer>
          </article>
        </section>
      </main>
    </Layout>
  );
}
