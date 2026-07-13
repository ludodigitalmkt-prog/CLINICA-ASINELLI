const FOTO_SDRIVE = "/images/epigenics/s-drive-epigenics.webp";

function encontrarTexto(texto: string): HTMLElement | null {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node: Node | null;

  while ((node = walker.nextNode())) {
    if (node.textContent?.trim() === texto) {
      return node.parentElement;
    }
  }

  return null;
}

function removerAnimacoes(elemento: HTMLElement) {
  elemento.style.setProperty("animation", "none", "important");
  elemento.style.setProperty("transition", "none", "important");
  elemento.style.setProperty("transform", "none", "important");
}

function colocarFoto(): boolean {
  const titulo = encontrarTexto("S-Drive");
  if (!titulo) return false;

  let card: HTMLElement | null = titulo.parentElement;

  while (card && card !== document.body) {
    const rect = card.getBoundingClientRect();
    if (rect.width > 400 && rect.height > 400) break;
    card = card.parentElement;
  }

  if (!card || card === document.body) return false;

  const cardRect = card.getBoundingClientRect();

  const elementos = Array.from(
    card.querySelectorAll<HTMLElement>("div")
  ).filter((elemento) => {
    const rect = elemento.getBoundingClientRect();
    return (
      rect.top > titulo.getBoundingClientRect().bottom &&
      rect.width > cardRect.width * 0.65 &&
      rect.height > cardRect.height * 0.35 &&
      rect.height < cardRect.height * 0.8
    );
  });

  const areaImagem = elementos.sort((a, b) => {
    const areaA = a.getBoundingClientRect().width * a.getBoundingClientRect().height;
    const areaB = b.getBoundingClientRect().width * b.getBoundingClientRect().height;
    return areaB - areaA;
  })[0];

  if (!areaImagem) return false;

  areaImagem.classList.add("area-foto-sdrive");
  areaImagem.style.setProperty("position", "relative", "important");
  areaImagem.style.setProperty("overflow", "hidden", "important");
  areaImagem.style.setProperty("isolation", "isolate", "important");
  areaImagem.style.setProperty("background", "none", "important");

  removerAnimacoes(areaImagem);

  Array.from(areaImagem.querySelectorAll<HTMLElement>("*")).forEach((el) => {
    removerAnimacoes(el);
  });

  let foto = areaImagem.querySelector<HTMLImageElement>('img[data-foto-sdrive="true"]');

  if (!foto) {
    foto = document.createElement("img");
    foto.dataset.fotoSdrive = "true";
    foto.src = FOTO_SDRIVE;
    foto.alt = "Tecnologia S-Drive para análise epigenética";
    areaImagem.appendChild(foto);
  }

  foto.style.setProperty("position", "absolute", "important");
  foto.style.setProperty("inset", "0", "important");
  foto.style.setProperty("width", "100%", "important");
  foto.style.setProperty("height", "100%", "important");
  foto.style.setProperty("object-fit", "cover", "important");
  foto.style.setProperty("object-position", "center", "important");
  foto.style.setProperty("display", "block", "important");
  foto.style.setProperty("opacity", "1", "important");
  foto.style.setProperty("visibility", "visible", "important");
  foto.style.setProperty("z-index", "999999", "important");
  foto.style.setProperty("animation", "none", "important");
  foto.style.setProperty("transition", "none", "important");
  foto.style.setProperty("transform", "none", "important");

  return true;
}

function iniciar(): void {
  colocarFoto();

  const observer = new MutationObserver(() => {
    colocarFoto();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciar);
} else {
  iniciar();
}
