'use strict'
let tooltip = document.createElement('div');

let addTooltip = (e) => {
  if (e.target.tagName.toLowerCase() != 'button') return;
  let target = e.target;
  let tooltipText = target.dataset.tooltip;

  tooltip.classList.add('tooltip');
  tooltip.innerHTML = tooltipText;
  document.body.append(tooltip);

  let coords = target.getBoundingClientRect();
  let top = coords.top - tooltip.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }
  let left = coords.left + (target.offsetWidth - tooltip.offsetWidth) / 2;
  if (left < 0) {
    left = 0;
  }

  tooltip.style.top = top + 'px';
  tooltip.style.left = left + 'px';
};

let removeTooltip = () => {
  tooltip.remove();
};

document.addEventListener('mouseover', addTooltip);
document.addEventListener('mouseout', removeTooltip);