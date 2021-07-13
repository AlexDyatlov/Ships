window.addEventListener("DOMContentLoaded", () => {
  let glob_data = [];

  function req() {

    getResource("ships.json")
      .then(data => {
        glob_data = data;
        createCards();
      })
      .catch(err => console.error(err));

    this.remove();
  }

  document.querySelector("button").addEventListener("click", req, {"once": true});

  async function getResource(url) {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  function createCards() {
    document.querySelector('.ships__list').innerHTML = '';

    glob_data
      .filter(item => {
        return (
          item.title.toLowerCase().includes(search_term) ||
          item.nation.toLowerCase().includes(search_term)
        )
      })
      .forEach(item => {
        let card = document.createElement('li');

        card.classList.add('ships__item');

        card.innerHTML = `
          <arcticle class="ship" style="background-image: url('img/ship.png');">
            <div class="ship__nation">${item.nation} /
              <span class="ship__type">${item.type}</span>
            </div>
            <div class="ship__level">${item.level}
              <span class="ship__title">${item.title}</span>
            </div>
          </arcticle>
          `;
        document.querySelector('.ships__list').appendChild(card);
      });
  }

  const search = document.getElementById("search");
  let search_term = "";

  search.addEventListener("input", (event) => {
    search_term = event.target.value.toLowerCase();
    createCards();
  });

});
