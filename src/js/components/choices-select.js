const listSelects = () => {
  const element = document.querySelectorAll('.select-default');
  element.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    })

    let ariaLabel = el.getAttribute('aria-label');
    el.closest('.choices').setAttribute('aria-label', ariaLabel);
  });
};

listSelects();