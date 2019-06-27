const init = () => {

  const input = document.querySelector('.autocomplete__input');
  const dropDown = document.querySelector('.autocomplete__drop-down');
  const cities = window.cities;

  const search = (inputStr, data) => {
    if (inputStr) {
      return data.filter((item) => {
        return item.City.toLowerCase().indexOf(inputStr.toLowerCase()) === 0;
      })
    }
    unmountDropDown();
  };

  const unmountDropDown = () => dropDown.innerHTML = ``;

  input.addEventListener('input', (evt) => {
    const dropDownData = search(evt.target.value, cities);
    mountDropDown(dropDownData);
  });

  dropDown.addEventListener('click', (evt) => {
    input.value = evt.target.innerHTML;
    unmountDropDown();
  })

  mountDropDown = (data) => {
    unmountDropDown();

    const autocompleteList = `
      <ul class="autocomplete__list">
        ${data
          .slice(0, 14)
          .map((item) => `<li class="autocomplete__list-item">${item.City}</li>`)
          .sort()
          .join(``)
        }
      </ul>
    `;

    if (data.length) {
      return dropDown.innerHTML = autocompleteList;
    }  
  };
};

init();
