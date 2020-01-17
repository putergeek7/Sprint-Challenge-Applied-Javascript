// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	const header = document.createElement('div');
	header.classList.add('header');

	const articleDate = document.createElement('span');
	articleDate.classList.add('date');
	header.appendChild(articleDate);
	articleDate.textContent = 'JANUARY 17, 2020';

	const headContainer = document.querySelector('header-container');
	headContainer.appendChild(header);

	const articleTitle = document.createElement('h1');
	header.appendChild(articleTitle);
	articleTitle.textContent = 'Lambda Times';

	const articleTemp = document.createElement('temp');
	articleTemp.classList.add('temp');
	header.appendChild(articleTemp);
	articleTemp.textContent = '98°';

	console.log(Header);

	return header;
}

Header();
