const state = {
  films: [
    {
      title: "Killing of Flower Moon",
      director: "Martin Scorsese",
      times: ["15:35"],
      certificate: "15",
      duration: 112,
    },
    {
      title: "Typist Artist Pirate King",
      director: "Carol Morley",
      times: ["15:00", "20:00"],
      certificate: "12A",
      duration: 108,
    },
  ],
  searchTerm: "flower",
};

const template = document.getElementById("film-card");

const createFilmCard = ({ title, director, certificate, duration }) => {
  const card = template.content.cloneNode(true);

  // Now we are querying our cloned fragment, not the entire page.
  card.querySelector("h3").textContent = title;
  card.querySelector("[data-director]").textContent = `Director: ${director}`;
  card.querySelector("time").textContent = `${duration} minutes`;
  card.querySelector("[data-certificate]").textContent =
    `Certificate: ${certificate}`;
  // Return the card, rather than directly appending it to the page
  return card;
};

function render() {
  const searchTerm = state.searchTerm.toLowerCase()
  const filteredFilms = state.films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm)
  );
  const filmCards = filteredFilms.map(createFilmCard);
  document.body.append(...filmCards);
}

render();
