/** @jsx h */
import { createSignal, h, onCleanup } from "@lucid/index.ts";

const [locationPath, setLocationPath] = createSignal<string>(
  self.location?.pathname ?? "/",
);

function onPopState() {
  setLocationPath(self.location.pathname);
}

function shouldHandleLink(ev: MouseEvent, a: HTMLAnchorElement) {
  if (ev.defaultPrevented) return false;
  if (a.target && a.target !== "_self") return false;
  if (a.hasAttribute("download")) return false;
  const url = new URL(a.href, self.location.href);
  if (url.origin !== self.location.origin) return false;
  if (url.protocol !== "http:" && url.protocol !== "https:") return false;
  if (a.getAttribute("rel")?.includes("external")) return false;
  if (a.href.startsWith("mailto:") || a.href.startsWith("tel:")) return false;
  if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return false;
  return true;
}

function onClick(ev: MouseEvent) {
  const t = ev.target as Element | null;
  const a = t?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!a) return;
  if (!shouldHandleLink(ev, a)) return;
  const url = new URL(a.href, self.location.href);
  if (
    url.pathname === self.location.pathname &&
    url.hash === self.location.hash
  ) {
    return;
  }
  ev.preventDefault();
  navigate(url.pathname + url.search + url.hash);
}

export function startRouter() {
  self.addEventListener("popstate", onPopState);
  self.addEventListener("click", onClick);
  onCleanup(() => {
    self.removeEventListener("popstate", onPopState);
    self.removeEventListener("click", onClick);
  });
}

export function navigate(to: string, replace = false) {
  if (replace) history.replaceState(null, "", to);
  else history.pushState(null, "", to);
  setLocationPath(self.location.pathname);
  self.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

export function useLocation() {
  return locationPath;
}

export function Link(props: { href: string; children?: unknown }) {
  return <a href={props.href}>{props.children}</a>;
}

export function Route(props: { path: string; children?: unknown }) {
  return () => (useLocation()() === props.path ? props.children : null);
}
