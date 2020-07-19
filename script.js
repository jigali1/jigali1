function t1() {
	collection = document.querySelectorAll('.key');
	collection.forEach(elem => {
		if (elem.getAttribute('data') === event.key.toLowerCase() || elem.getAttribute('data') === event.code) {
			elem.classList.add('active-key');
		}
	});
	document.querySelector('.i-11').onkeyup = () => {
        collection.forEach(elem => {
        	console.log()
            if (elem.classList.contains("active-key")) {
                elem.classList.remove("active-key");
            }
		});
	}
}


// ваше событие здесь!!!
document.querySelector('.i-11').onkeydown = t1;