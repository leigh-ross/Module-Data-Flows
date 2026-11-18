const film = {
  title: "Killing of Flower Moon",
  director: "Martin Scorsese",
  times: ["15:35"],
  certificate: "15",
  duration: 112,
};

const template = document.getElementById("film-card");

const createFilmCard = ({title, director, certificate, duration}) => {
  const card = template.content.cloneNode(true);

  // Now we are querying our cloned fragment, not the entire page.
  card.querySelector("h3").textContent = title;
  card.querySelector("[data-director]").textContent =
    `Director: ${director}`;
  card.querySelector("time").textContent = `${duration} minutes`;
  card.querySelector("[data-certificate]").textContent =
    `Certificate: ${certificate}`;
  // Return the card, rather than directly appending it to the page
  return card;
};

const filmCards = [];
for (const item of films) {
	filmCards.push(createFilmCard(item));
}

// Remember we need to append the card to the DOM for it to appear.
document.body.append(...filmCards);