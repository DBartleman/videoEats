document.addEventListener('DOMContentLoaded', async (e) => {
	const searchTagsField = document.getElementById('reviewTags');
	function autoComplete(array, input) {
		return array.filter((e) => e.tolowerCase().includes(input.tolowerCase()));
	}
	try {
		// grabs all the tags from the backend
		const res = await fetch('http://localhost:8080/businesses/tags');
		const { tags } = await res.json();
		let tagsArray = [];
		tags.forEach((tag) => {
			tagsArray.push(tag.type);
		});
		console.log(tagsArray);
	} catch (err) {
		console.error(err);
	}
	searchTagsField.addEventListener('keyup', async (e) => {});
});
