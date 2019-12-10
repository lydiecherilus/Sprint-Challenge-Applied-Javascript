/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


 // define new elements
 const header = document.createElement('div');
 const titleText = document.createElement('h1');
 const dateText = document.createElement('span');
 const tempText = document.createElement('span');

 // set class names
 header.classList.add('header');
 dateText.classList.add('date');
 tempText.classList.add('temp');

 // setup structure of elements 
 header.appendChild(titleText);
 header.appendChild(dateText);
 header.appendChild(tempText);

 // set text content
 titleText.textContent = 'Lambda Times'
 dateText.textContent = 'SMARCH 28, 2019';
 tempText.textContent = '98°';

 return header;
}

const header = document.querySelector('.header');
const newHeader =  Header
header.appendChild(newHeader)
