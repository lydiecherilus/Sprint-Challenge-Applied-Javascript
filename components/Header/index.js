// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const header = document.createElement('div');
    header.classList.add('header');

    const dateText = document.createElement('span');
    dateText.classList.add('date');
    dateText.textContent = 'SMARCH 28, 2019';

    const titleText = document.createElement('h1');
    titleText.textContent = 'Lambda Times'

    const tempText = document.createElement('span');
    tempText.classList.add('temp');
    tempText.textContent = '98°';

    header.appendChild(dateText);
    header.appendChild(titleText);
    header.appendChild(tempText);

    return header;
}

const newHeader = document.querySelector('.header-container');
newHeader.appendChild(Header());
