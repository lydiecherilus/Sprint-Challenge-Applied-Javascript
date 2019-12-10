// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entrypoint = document.querySelector('.cards-container')

function createArticles(topics) {
    const cards_containers = document.querySelector('.cards-container')
    topics.forEach(article => {

        // create elements
        const card = document.createElement('div')
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const img_container = document.createElement('div');
        const img = document.createElement('img');
        const author_name = document.createElement('span')

        // add class
        card.classList.add('card')
        headline.classList.add('headline');
        img_container.classList.add('img-container');
        author.classList.add('author');

        // add text content
        headline.textContent = article.headline
        author_name.textContent = article.authorName
        img.src = article.authorPhoto

        // set structure
        cards_containers.appendChild(card)
        card.appendChild(headline)
        card.appendChild(author)
        author.appendChild(author_name)
        author.appendChild(img_container)
        img_container.appendChild(img)
    });
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response.data);
        for (let key in response.data.articles) {createArticles(response.data.articles[key])}
    });


