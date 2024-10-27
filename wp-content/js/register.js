const form = document.querySelector("form")

form.addEventListener("submit", ev => {
	ev.preventDefault();

	const formdata = new FormData(form)

	const username = formdata.get("uname")
	// const paswword = formdata.get("psw")

	location.href = location.origin + "?" + "logged=true&username=" + username;
})
