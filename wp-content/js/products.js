function modalPopup(img, title, info) {
	const modal = document.createElement("div")
	modal.classList.add("popup-page")

	modal.innerHTML = `
		<div class="modal-inner">
			<div class="left-side">
				<img class="pr" src="${img}">
			</div>
			<div class="right-side">
				<i class="fas fa-plus"></i>
				<h3>${title}</h3>
				<p class="long">${info}</p>
			</div>
		</div>
	`

	modal.querySelector("i").addEventListener("click", ev => {
		modal.style.setProperty("animation", "pop-out 0.8s ease");
		modal.style.setProperty("animation-fill-mode", "both")
		setTimeout(() => modal.remove(), 800);
	})

	return modal
}

const dataList = {
	"urea": `Urea fertilizer is a powerful nitrogen source, essential for healthy plant growth and improved yields. Designed to deliver nutrients directly to your crops, it enhances leaf development and strengthens plant structure, ensuring your farm thrives. With Petani Berjaya’s subsidy, you can access this high-quality fertilizer at an affordable price, maximizing your productivity while minimizing costs. Perfect for rice, maize, and other staple crops, urea is the key to a greener, more prosperous harvest.`,
	"za": `ZA fertilizer is a rich source of both nitrogen and sulfur, essential nutrients that drive plant growth and enhance crop quality. It helps green up your crops while improving protein content and overall yield. Perfect for rice, corn, and vegetable farming, ZA fertilizer ensures healthy, vigorous plants from root to leaf. With Petani Berjaya’s subsidy, you can access this premium fertilizer at a fraction of the cost, giving your farm the nutrients it needs to flourish. Grow smarter and stronger with ZA fertilizer.`,
	"sp36": `SP-36 fertilizer provides essential phosphorus, promoting strong root growth and boosting flowering and fruiting in your crops. It’s ideal for improving soil fertility, ensuring plants get the nutrients they need for higher yields. With Petani Berjaya’s subsidy, you can take advantage of this high-quality phosphorus fertilizer at a reduced cost, perfect for crops like soybeans, peanuts, and potatoes. Strengthen your soil and increase your harvest with SP-36—because healthy roots lead to a bountiful future.`,
	"npk": `NPK fertilizer provides a complete, balanced blend of nitrogen, phosphorus, and potassium—the essential nutrients your crops need for healthy growth, strong roots, and abundant harvests. Designed to improve plant health from root development to fruit production, NPK is perfect for a wide variety of crops, including vegetables, grains, and fruits. Through Petani Berjaya’s subsidy, you can now access this high-quality fertilizer at a lower cost, ensuring your farm gets the full spectrum of nutrients for maximum productivity. Boost your yields and farm sustainability with NPK fertilizer.`,
	"organic": `Organic fertilizer offers a sustainable way to enrich your soil, using natural ingredients to promote healthy plant growth and improve soil structure. Rich in essential nutrients and beneficial microorganisms, it enhances soil fertility while supporting eco-friendly farming practices. Whether you're growing vegetables, fruits, or grains, organic fertilizer helps increase crop yields while maintaining long-term soil health. Through Petani Berjaya’s subsidy, you can access this high-quality, environmentally friendly fertilizer at a lower cost, supporting both your farm and the environment.`
}

document.querySelectorAll("div[data-item-product]").forEach((item, idx) => {
	const itemName = item.getAttribute("data-item-product")
	const img = item.querySelector("img").src
	
	item.addEventListener("click", ev => {
		document.body.append(modalPopup(img, itemName, dataList[itemName]))
	})
})

// document.querySelector("div[data-box-product]").removeAttribute("class")
