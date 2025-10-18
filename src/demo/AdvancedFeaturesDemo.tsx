import { createSignal, h, onCleanup, onMount } from "@lucid/index.ts";
import { advancedDemoStore } from "@store/advancedDemo.ts";

export default function AdvancedFeaturesDemo() {
  // Store para dados persistentes
  const count = advancedDemoStore.select((state) => state.count);
  const { increment } = advancedDemoStore.getState();

  // Signals locais para lifecycle (não precisam persistir)
  const [mounted, setMounted] = createSignal(false);
  const [logs, setLogs] = createSignal<string[]>([]);

  const addLog = (message: string) => {
    setLogs(
      (prev) => [...prev, `${new Date().toLocaleTimeString()}: ${message}`],
    );
  };

  onMount(() => {
    const message = "✅ Componente montado com onMount!";
    addLog(message);
    console.log(message);
    setMounted(true);

    // Exemplo de limpeza com onCleanup
    const interval = setInterval(() => {
      const intervalMsg = "⏰ Interval executando...";
      addLog(intervalMsg);
      console.log(intervalMsg);
    }, 2000);

    onCleanup(() => {
      const cleanupMsg = "🧹 Limpeza executada com onCleanup!";
      addLog(cleanupMsg);
      console.log(cleanupMsg);
      clearInterval(interval);
    });

    // Simulação de recurso que precisa de limpeza
    const timeoutId = setTimeout(() => {
      const timeoutMsg = "⚡ Timeout executado!";
      addLog(timeoutMsg);
      console.log(timeoutMsg);
    }, 5000);

    onCleanup(() => {
      const cancelMsg = "🧹 Timeout cancelado!";
      addLog(cancelMsg);
      console.log(cancelMsg);
      clearTimeout(timeoutId);
    });
  });

  return (
    <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <header class="mb-6">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Recursos Avançados: onMount & onCleanup
        </h2>
        <p class="text-gray-600 dark:text-gray-400">
          Demonstração de lifecycle e limpeza de recursos
        </p>
      </header>

      <div class="space-y-4">
        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p class="text-gray-900 dark:text-white mb-2">
            Status: {() => mounted() ? "✅ Montado" : "⏳ Montando..."}
          </p>
          <button
            type="button"
            class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            onClick={() => {
              console.log("Botão clicado, count atual:", count());
              increment();
              console.log("Count após increment:", count());
            }}
          >
            Clique aqui: {count}
          </button>
          <div class="flex gap-2 mt-3">
            <button
              type="button"
              class="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-3 rounded text-sm transition-colors duration-200"
              onClick={() => {
                console.log("🧹 Limpando logs da UI...");
                setLogs([]);
              }}
            >
              Limpar Logs
            </button>
            <button
              type="button"
              class="bg-red-600 hover:bg-red-700 text-white font-medium py-1 px-3 rounded text-sm transition-colors duration-200"
              onClick={() => {
                advancedDemoStore.getState().reset();
                setLogs([]);
                // Não resetamos o mounted porque o componente continua montado
                addLog("🔄 Reset realizado - componente permanece montado");
              }}
            >
              Reset Tudo
            </button>
          </div>
          <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Estado persiste entre navegações! Navegue para outra página e volte.
          </p>
        </div>

        <div class="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Logs do Lifecycle:
          </h3>
          <div class="max-h-40 overflow-y-auto space-y-1">
            {logs().map((log) => (
              <p class="text-sm font-mono text-gray-700 dark:text-gray-300">
                {log}
              </p>
            ))}
          </div>
        </div>

        <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 class="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            O que foi implementado:
          </h4>
          <ul class="text-sm text-blue-800 dark:text-blue-300 space-y-1">
            <li>• onMount() - Executa após o componente ser montado</li>
            <li>• onCleanup() - Registra funções de limpeza</li>
            <li>• createStore() - Estado global com persistência</li>
            <li>• Store selectors - Reatividade automática</li>
            <li>• localStorage - Estado persiste entre sessões</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
