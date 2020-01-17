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
	const articleDate = document.createElement('span');
	const articleTitle = document.createElement('h1');
	const articleTemp = document.createElement('temp');

	header.classList.add('header');
	articleDate.classList.add('date');
    articleTemp.classList.add('temp');
    
    

	console.log(Header);

	return;
}
