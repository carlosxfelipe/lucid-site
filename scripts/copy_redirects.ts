try {
  await Deno.mkdir("dist", { recursive: true });
  await Deno.copyFile("public/_redirects", "dist/_redirects");
  // console.log("✅ Copiado: public/_redirects → dist/_redirects");
} catch (err) {
  console.error("❌ Erro ao copiar _redirects:", err);
}
