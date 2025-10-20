import { batch, createMemo, createSignal, h } from "@lucid/index.ts";

type Props = { initial?: number; resetTo?: number };

export default function Counter({ initial = 0, resetTo = 0 }: Props) {
  // Signal persistente para o contador
  const [count, setCount] = createSignal<number>(initial, {
    key: "app.counter.signal",
  });
  const doubled = createMemo(() => count() * 2);

  // Ações
  const inc = () => setCount((c) => c + 1);
  const dec = () => setCount((c) => Math.max(0, c - 1));
  const reset = (to = 0) => setCount(to);
  const plusTwo = () =>
    batch(() => {
      inc();
      inc();
    });
  const isAtReset = createMemo(() => count() === resetTo);

  return (
    <article class="space-y-4">
      <div class="grid gap-1 mb-3">
        <div class="text-gray-900 dark:text-white">
          Valor: <span class="font-semibold">{count}</span>
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          Dobro (memo): <span class="font-semibold">{doubled}</span>
        </div>
      </div>

      <div role="group" class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          type="button"
          class="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md border border-gray-600 hover:border-gray-700 transition-colors duration-200"
          onClick={dec}
          disabled={() => count() <= 0}
          aria-label="decrement by one"
        >
          −1
        </button>

        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          onClick={inc}
          aria-label="increment by one"
        >
          +1
        </button>

        <button
          type="button"
          class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md border border-blue-600 hover:border-blue-700 transition-colors duration-200"
          onClick={plusTwo}
          aria-label="increment twice in batch"
        >
          +2 (batch)
        </button>

        <button
          type="button"
          class="bg-gray-800 hover:bg-gray-900 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={() => reset(resetTo)}
          disabled={isAtReset}
          aria-label="reset counter"
        >
          reset
        </button>
      </div>
    </article>
  );
}
