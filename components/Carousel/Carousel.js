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

function createCarousel() {
	const newCarousel = document.createElement('div'),
		newLeftButton = document.createElement('div'),
		newMountainImg = document.createElement('img'),
		newComputerImg = document.createElement('img'),
		newTreesImg = document.createElement('img'),
		newTurntableImg = document.createElement('img'),
		newRightButton = document.createElement('div');

	newCarousel.classList.add(carousel);
	newLeftButton.classList.add(left - button);
	newRightButton.classList.add(right - button);

	newMountainImg.src = './assets/carousel/mountains.jpeg';
	newComputerImg.src = './assets/carousel/computer.jpeg';
	newTreesImg.src = './assets/carousel/trees.jpeg';
	newTurntableImg.src = './assets/carousel/turntable.jpeg';
}
