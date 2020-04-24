document.addEventListener('DOMContentLoaded', (e) => {
	const navbarSearch = document.querySelector('.navbar-search');
	const searchButton = document.getElementById('search-btn');
	const dropDown = document.querySelector('.dropdown');
	const dropDownToggle = document.querySelector('.dropdown-toggle');
	const dropDownMenu = document.querySelector('.dropdown-menu');
	const dropDownName = document.getElementById('item-name');
	const dropDownLocation = document.getElementById('item-location');
	const dropDownTag = document.getElementById('item-tag');
	const searchField = document.querySelector('.searchField');
	const collapseButton = document.querySelector('.navbar-collapse');
	// let searchingFor = 1;

	dropDown.addEventListener('click', () => {
		document.querySelector('.dropdown-menu').classList.toggle('show');
	});
	collapseButton.addEventListener('click', () => {
		// TODO: show collapsed elements when clicking button
		collapseButton.classList.toggle('show');
	});
	dropDownMenu.addEventListener('click', (event) => {
		// help me dry up this code please
		console.log(event.target);
		if (event.target === dropDownName) {
			dropDownToggle.innerHTML = 'Search for: ' + dropDownName.innerHTML;
			searchField.placeholder = '< ' + dropDownName.innerHTML + ' >';
		} else if (event.target === dropDownLocation) {
			dropDownToggle.innerHTML = 'Search for: ' + dropDownLocation.innerHTML;
			searchField.placeholder = dropDownLocation.innerHTML;
		} else if (event.target === dropDownTag) {
			dropDownToggle.innerHTML = 'Search for: ' + dropDownTag.innerHTML;
			searchField.placeholder = dropDownTag.innerHTML;
		}
	});

	// set up the event listener for the submit button
	navbarSearch.addEventListener('submit', async (e) => {
		// Prevent the default behavior of the submit button
		e.preventDefault();
		//TODO: when implementing search functionality, find out why this action never fires
		console.log('sanity check');
		console.log(e.target.value);
	});

	searchButton.addEventListener('submit', async (e) => {
		// e.preventDefault();
		// console.log('sanity check');
		// console.log(e.target.innerHTML);
	});
});
