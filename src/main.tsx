import { createRoot, h, mount } from "@lucid/index.ts";
import { startRouter, useLocation } from "@router/router.tsx";
import HomePage from "@pages/HomePage.tsx";
import ContactPage from "@pages/ContactPage.tsx";
import { listenThemeStorage } from "@theme/theme.ts";

function App() {
  const location = useLocation();
  return (
    <div data-screen-root>
      {() => {
        const path = location();
        if (path === "/") return <HomePage />;
        if (path === "/contact") return <ContactPage />;

        return (
          <section class="container mx-auto px-4 flex justify-center items-center h-screen">
            <div class="text-center">
              <h1>404</h1>
              <p>Página não encontrada.</p>
              <a href="/" class="text-blue-600 hover:underline">
                Voltar para Home
              </a>
            </div>
          </section>
        );
      }}
    </div>
  );
}

createRoot(() => {
  listenThemeStorage();

  startRouter();
  const root = document.getElementById("app")!;
  mount(<App />, root);
});
