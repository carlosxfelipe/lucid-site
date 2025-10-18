try {
  await Deno.mkdir("dist", { recursive: true });
  await Deno.copyFile("public/_redirects", "dist/_redirects");

  // Copy favicon if it exists
  try {
    await Deno.copyFile("public/favicon.svg", "dist/favicon.svg");
    // console.log("✅ Copiado: public/favicon.svg → dist/favicon.svg");
  } catch {
    console.log("⚠️  favicon.svg não encontrado em public/");
  }

  // console.log("✅ Copiado: public/_redirects → dist/_redirects");
} catch (err) {
  console.error("❌ Erro ao copiar arquivos:", err);
}
