// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
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

const mainCont = document.querySelector('.cards-container');

function createCard(data) {
	// define new elements
	const cardHeadline = document.createElement('div');
	const headline = document.createElement('div');
	const author = document.createElement('div');
	const imgContainer = document.createElement('div');
	const image = document.createElement('img');
	const authorAlias = document.createElement('span');

	// set class names
	headline.classList.add('headline');
	author.classList.add('author');
	image.classList.add('img-container');
	cardHeadline.classList.add('card');

	// set text content
	headline.textContent = data.headline;
	image.src = data.authorPhoto;
	author.textContent = data.authorName;

	//append children to the parent
	cardHeadline.appendChild(headline);
	cardHeadline.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(image);
	author.appendChild(authorAlias);

	return cardHeadline;
}

axios
	.get(`https://lambda-times-backend.herokuapp.com/articles`)

	.then(response => {
		Object.values(response.data.articles).forEach(topic => {
			topic.forEach(headline => {
				let mainCont = document.querySelector('.cards-container');
				mainCont.appendChild(createCard(headline));
			});
		});
	})
	.catch(e => {
		console.log('ERROR!', e);
	});
