// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const entryPoint = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response.data);
        response.data.topics.forEach(item => {
            entryPoint.appendChild(createTab(item))
        })
    });

function createTab(topicsUrl) {

    const topics = document.createElement('div');
    topics.classList.add('tab');
    topics.textContent = topicsUrl

    const title = document.createElement('span');

    title.textContent = 'TRENDING TOPICS'

    const tab = document.querySelector('tab');

    return topics;
}


