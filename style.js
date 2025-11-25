const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;

    // Toggle da seta
    header.classList.toggle("active");

    // Se estiver aberto, fecha
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
