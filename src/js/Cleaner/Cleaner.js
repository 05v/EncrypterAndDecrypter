class Cleaner {
  // maakt de input velden leeg,
  // whattoclean is het html element dat wordt leeggemaakt
  // om de oude input weg te halen
  clean(whatToClean) {
    document.querySelector(whatToClean).innerHTML = "";
  }
}
