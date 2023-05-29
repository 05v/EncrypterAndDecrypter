class Renderer {
  // rendered WHATTORENDER Html element in WHERETORENDER html elment
  render(whatToRender, whereToRender) {
    whereToRender.appendChild(whatToRender);
  }
}
