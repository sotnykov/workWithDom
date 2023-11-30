document.querySelectorAll('ul.root > li > ul > li:last-child').forEach(item => {
  item.classList.add('last');
  setTimeout(() => {
    item.style.backgroundColor = 'green';
  }, 2000);
});

function setFirstItemClassName(level) {
  const levelElements = document.querySelectorAll(`ul.root > li > ul > li:nth-child(${level})`);
  levelElements.forEach(item => {
    item.classList.add('first');
    setTimeout(() => {
      item.style.backgroundColor = 'red';
    }, 2000);
  });
}

setFirstItemClassName(1);