// Creating the year input in birthday

window.onload = function () {
	// var select, i, option;
	select = document.getElementById("year");
	for (i = 1900; i <= 2050; i++) {
		option = document.createElement("option");
		// option.value = option.text = i;
		option.innerHTML = i;
		select.appendChild(option);
	}
};
