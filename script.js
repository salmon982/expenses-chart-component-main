const indicators = document.querySelectorAll('.indicator');

indicators.forEach(indicator => {
  let nextSibling = indicator.nextElementSibling;
  let indicatorValue = parseFloat(indicator.textContent.slice(1));
  nextSibling.style.height = `${indicatorValue / 6.5}em`;
  nextSibling.addEventListener("mouseover", () => {
    indicator.style.opacity = "1";
  })
  nextSibling.addEventListener("mouseout", () => {
    indicator.style.opacity = "0";
  })
})