// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the 'topics' creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const mainTab = document.querySelector('.topics');

function createTabs(array) {
	// list each item in the array
	array.forEach(data => {
		// define new elements
		const tab = document.createElement('div');
		// set class names
		tab.classList.add('tab');
		// set text content
		tab.textContent = data;
		//append child to the parent
		mainTab.appendChild(tab);
	});
}

axios
	.get(`https://lambda-times-backend.herokuapp.com/topics`)
	.then(response => {
		createTabs(response.data.topics);
	})
	.catch(e => {
		console.log('ERROR!', e);
	});
