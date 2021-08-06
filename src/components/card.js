
import axios from "axios";
const Card = ({ headline, authorPhoto, authorName }) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  // create the elements
  const cardD = document.createElement("div");
  const headLineD = document.createElement("div");
  const authorD = document.createElement("div");
  const imgD = document.createElement("div");
  const img = document.createElement("img");
  const authorS = document.createElement("span");
  // create the classes
  cardD.classList.add("card");
  headLineD.classList.add("headline");
  authorD.classList.add("author");
  imgD.classList.add("img-container");
  // rewrite the text content
  headLineD.textContent = `${headline}`;
  authorS.textContent = `${authorName}`;
  // apply attributes
  img.setAttribute("src", `${authorPhoto}`);
  // join or append
  cardD.appendChild(headLineD);
  cardD.appendChild(authorD);
  authorD.appendChild(imgD);
  imgD.appendChild(img);
  authorD.appendChild(authorS);
  // add an event listener
  function display() {
    console.log(`${headline}`);
  }
  cardD.addEventListener("click", display);
  return cardD;
};
const cardAppender = (selector) => {
  const cardContainer = document.querySelector(".cards-container");
  axios
    .get("http://localhost:5000/api/articles")
    .then((res) => {
      console.log(res.data.articles);
      const articleObj = Card(res.data.articles.javascript[0]);
      const articleObj2 = Card(res.data.articles.javascript[1]);
      const articleObj3 = Card(res.data.articles.javascript[2]);
      const articleObj4 = Card(res.data.articles.javascript[3]);
      cardContainer.appendChild(articleObj2);
      cardContainer.appendChild(articleObj3);
      cardContainer.appendChild(articleObj4);
      cardContainer.appendChild(articleObj);
    })
    .catch((err) => {
      console.error(err);
    });
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};
export { Card, cardAppender };
