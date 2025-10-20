import { h } from "@lucid/index.ts";

export default function Tailwind() {
  return (
    <div class="w-full bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div class="flex flex-col lg:flex-row">
        <div class="lg:w-1/3">
          <div class="h-48 lg:h-full w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
            <span class="text-white text-xl font-bold">
              🎨 Tailwind + Dark Mode
            </span>
          </div>
        </div>
        <div class="lg:w-2/3 p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">
            Lucid + Tailwind CSS
          </div>
          <h2 class="block mt-1 text-lg leading-tight font-medium text-black dark:text-white hover:underline">
            Tailwind CSS com Dark Mode!
          </h2>
          <p class="mt-2 text-slate-500 dark:text-slate-400">
            Este componente está usando classes do Tailwind CSS com suporte
            total ao dark mode. Teste o botão de alternar tema no navbar para
            ver a mudança!
          </p>
          <div class="mt-4 flex space-x-2">
            <button
              type="button"
              class="bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Botão Primary
            </button>
            <button
              type="button"
              class="bg-transparent hover:bg-gray-500 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:text-white py-2 px-4 border border-gray-500 dark:border-gray-400 hover:border-transparent rounded transition-colors"
            >
              Botão Outline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
