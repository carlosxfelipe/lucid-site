import { h } from "@lucid/index.ts";
import { distinct, maxBy, partition, sumOf } from "@std/collections";

type User = {
  name: string;
  age: number;
  city: string;
  role: "dev" | "designer" | "manager" | string;
  salary: number;
};

export default function CollectionsDemo() {
  const users: User[] = [
    { name: "Ana", age: 25, city: "São Paulo", role: "dev", salary: 5000 },
    {
      name: "João",
      age: 30,
      city: "Rio de Janeiro",
      role: "designer",
      salary: 4500,
    },
    { name: "Maria", age: 25, city: "São Paulo", role: "dev", salary: 5200 },
    {
      name: "Pedro",
      age: 28,
      city: "Belo Horizonte",
      role: "dev",
      salary: 4800,
    },
    {
      name: "Lucas",
      age: 32,
      city: "Rio de Janeiro",
      role: "manager",
      salary: 7000,
    },
  ];

  const uniqueRoles = distinct(users.map((u) => u.role));
  const oldestUser = maxBy(users, (u) => u.age);
  const totalSalary = sumOf(users, (u) => u.salary);
  const [seniors, juniors] = partition(users, (u) => u.age >= 30);

  const usersByCity = users.reduce((acc, user) => {
    if (!acc[user.city]) acc[user.city] = [];
    acc[user.city].push(user);
    return acc;
  }, {} as Record<string, User[]>);

  const handleCollectionsDemo = () => {
    console.log("Usuários agrupados por cidade:", usersByCity);
    console.log("Roles únicos:", uniqueRoles);
    console.log("Usuário mais velho:", oldestUser);
    console.log("Soma total dos salários:", totalSalary);
    console.log("Usuários seniores (30+):", seniors);
    console.log("Usuários juniores (<30):", juniors);

    const currency = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    alert(
      `Collections Demo
Roles: ${uniqueRoles.join(", ")}
Mais velho: ${oldestUser?.name} (${oldestUser?.age} anos)
Total salários: ${currency.format(totalSalary)}
Seniores: ${seniors.length} | Juniores: ${juniors.length}`,
    );
  };

  return (
    <section aria-labelledby="collections-title" class="space-y-6">
      <header class="text-center mb-6">
        <h2
          id="collections-title"
          class="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Demo: @std/collections
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Exemplo de manipulação de dados usando utilitários do Deno{" "}
          <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
            @std/collections
          </code>
          .
        </p>
      </header>

      <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <header class="mb-6">
          <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
            Resumo
          </h4>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <article class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <header class="mb-2">
              <small class="text-sm text-gray-500 dark:text-gray-400">
                Roles únicos
              </small>
            </header>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">
              {uniqueRoles.join(", ")}
            </p>
          </article>

          <article class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <header class="mb-2">
              <small class="text-sm text-gray-500 dark:text-gray-400">
                Usuário mais velho
              </small>
            </header>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">
              {oldestUser?.name} ({oldestUser?.age})
            </p>
          </article>

          <article class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <header class="mb-2">
              <small class="text-sm text-gray-500 dark:text-gray-400">
                Total de salários
              </small>
            </header>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(totalSalary)}
            </p>
          </article>

          <article class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
            <header class="mb-2">
              <small class="text-sm text-gray-500 dark:text-gray-400">
                Seniores / Juniores
              </small>
            </header>
            <p class="text-lg font-semibold text-gray-900 dark:text-white">
              {seniors.length} / {juniors.length}
            </p>
          </article>
        </div>

        <footer>
          <button
            type="button"
            class="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 dark:bg-gray-500 dark:hover:bg-gray-600"
            onClick={handleCollectionsDemo}
          >
            Executar Collections Demo
          </button>
        </footer>
      </article>

      <div class="space-y-6">
        <h4 class="text-xl font-semibold text-gray-900 dark:text-white">
          Dados de exemplo ({users.length} usuários)
        </h4>

        <div class="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Nome
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Idade
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Cidade
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Role
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Salário
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((u, index) => (
                <tr key={index} class="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <strong class="text-gray-900 dark:text-white">
                      {u.name}
                    </strong>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {u.age}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {u.city}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <code class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded text-sm font-mono">
                      {u.role}
                    </code>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(u.salary)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <details class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
          <summary class="cursor-pointer text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
            O que está sendo demonstrado
          </summary>
          <ul class="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>
              <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                distinct()
              </code>{" "}
              – Extrair roles únicos
            </li>
            <li>
              <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                maxBy()
              </code>{" "}
              – Encontrar usuário mais velho
            </li>
            <li>
              <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                sumOf()
              </code>{" "}
              – Somar todos os salários
            </li>
            <li>
              <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                partition()
              </code>{" "}
              – Separar por seniores e juniores
            </li>
            <li>
              <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">
                reduce()
              </code>{" "}
              – Agrupamento manual por cidade
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
