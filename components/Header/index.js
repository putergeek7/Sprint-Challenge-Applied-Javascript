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
	// define new elements
	const header = document.createElement('div');
	const headerDate = document.createElement('span');
	const headerTitle = document.createElement('h1');
	const headerTemp = document.createElement('span');

	// set class names
	headerDate.classList.add('date');
	headerTemp.classList.add('temp');
	header.classList.add('header');

	// set text content
	headerDate.textContent = `JANUARY 17, 2020`;
	headerTitle.textContent = `Lambda Times`;
	headerTemp.textContent = `98°`;

	//append children to the parent
	header.appendChild(headerDate);
	header.appendChild(headerTitle);
	header.appendChild(headerTemp);

	return header;
}
mainHeader.appendChild(createHeader());
