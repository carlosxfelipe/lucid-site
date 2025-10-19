import { batch, createMemo, h } from "@lucid/index.ts";
import { counterStore } from "@store/counter.ts";

type Props = { initial?: number; resetTo?: number };

export default function Counter({ initial = 0, resetTo = 0 }: Props) {
  // Initialize state if an initial value is provided and the current count is 0
  if (initial !== 0 && counterStore.getState().count === 0) {
    counterStore.setState({ count: initial });
  }

  // Reactive signals from store
  const count = counterStore.select((s) => s.count);
  const doubled = createMemo(() => count() * 2);

  // Actions from store
  const { inc, dec, reset } = counterStore.getState();

  // Increment count twice within a single batch
  const plusTwo = () =>
    batch(() => {
      inc();
      inc();
    });

  // Check if the counter is already at the reset value
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
