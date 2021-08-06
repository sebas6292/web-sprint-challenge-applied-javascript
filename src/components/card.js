import axios from "axios"

const Card = ({headline, authorPhoto, authorName}) => {
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
  //
  const card = document.createElement('div')
  const headLine = document.createElement('div')
  const author = document.createElement('div')
  const container = document.createElement('div')
  const image = document.createElement('img')
  const authorName1 = document.createElement('span')

  card.classList.add('class')
  headLine.classList.add('headline')
  author.classList.add('author')
  container.classList.add('img-container')

  image.setAttribute('src',`${authorPhoto}`)//question
  image.setAttribute('alt', '')

  headLine.textContent =`${headline}`//question
  authorName1.textContent = `${authorName}`

  card.appendChild(headLine)
  card.appendChild(author)
  author.appendChild(container)
  container.appendChild(image)
  author.appendChild(authorName1)

  function logs () {
    console.log('this appears in the console')
  }

  card.addEventListener('click', logs)//question
  

  return card

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  const cards = document.querySelector('.cards-container')

  axios.get(`http://localhost:5000/api/articles`)
  .then(res => {
    console.log(res.data.articles.javascript[1])
    const info = Card(res.data.articles.javascript[1])
    cards.appendChild(info)
  })
  .catch(err => {
    console.log(err)
  })
}

export { Card, cardAppender }
