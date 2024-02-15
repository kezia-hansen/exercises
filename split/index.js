const splitTargets = document.querySelectorAll("[data-split]");

splitTargets.forEach((target) => {
  const content = target.textContent;

  const splittedText = splitIntoChars(content);

  target.innerHTML = splittedText;
});

function splitIntoChars(string) {
  return string.split("").map(wrapInSpan).join("");
}

function wrapInSpan(node, i) {
  return `<span class="char" style="--i: ${i}">${node}</span>`;
}
