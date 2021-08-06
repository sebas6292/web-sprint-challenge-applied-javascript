import axios from "axios"

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const choices = document.createElement('div')
  const tab1 = document.createElement('div')
  const tab2 = document.createElement('div')
  const tab3 = document.createElement('div')
  const tab4 = document.createElement('div')
  const tab5 = document.createElement('div')

  choices.classList.add('topics')
  tab1.classList.add('tab')
  tab2.classList.add('tab')
  tab3.classList.add('tab')
  tab4.classList.add('tab')
  tab5.classList.add('tab')
  
  tab1.textContent = 'javascript'
  tab2.textContent = 'bootstrap'
  tab3.textContent = 'technology'
  tab4.textContent = 'jquery'
  tab5.textContent = 'node.js'

  

  choices.appendChild(tab1)
  choices.appendChild(tab2)
  choices.appendChild(tab3)
  choices.appendChild(tab4)
  choices.appendChild(tab5)


  return choices
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const tabs = document.querySelector('.tabs-container')

  axios.get(`http://localhost:5000/api/topics`)
  .then(res => {
    console.log(res.data.topics)
    const list = Tabs(res.data.topics)
    tabs.appendChild(list)
  })
  .catch(err => {
    console.log(err)
  })

}

export { Tabs, tabsAppender }
