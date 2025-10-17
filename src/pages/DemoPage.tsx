import { h } from "@lucid/index.ts";
import Layout from "@layout/Layout.tsx";
import Counter from "../demo/Counter.tsx";
import CollectionsDemo from "../demo/CollectionsDemo.tsx";

export default function DemoPage() {
  return (
    <Layout>
      <header class="mb-12">
        <hgroup class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 pb-2 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
            Demonstrações
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Exemplos práticos usando LucidJS e bibliotecas do Deno
          </p>
        </hgroup>
      </header>

      <main class="max-w-6xl mx-auto px-4">
        <section class="space-y-8">
          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
              Counter - Gerenciamento de Estado
            </h2>
            <Counter />
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-3">
              Collections - Manipulação de Dados
            </h2>
            <CollectionsDemo />
          </div>
        </section>
      </main>
    </Layout>
  );
}
