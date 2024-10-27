const param = location.href.indexOf("?")
const parseCookie = str => str.split(';').map(v => v.split('=')).reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

let params_eng = parseCookie(document.cookie)

if(param !== -1) {
	const searchParams = new URL(location.href).searchParams

	const isLogged = searchParams.get("logged")
	const uname = searchParams.get("username")
	

	document.cookie = serializeCookie('logged', isLogged)
	document.cookie = serializeCookie('username', uname)
	params_eng = parseCookie(document.cookie);
	history.replaceState({}, "", location.origin)
}


if(document.cookie.length > 0) {
	if(params_eng.logged === 'true') {
		// const uname = params_eng.username
		
		const menu = document.querySelector(".register-menu");
		const bef = menu.textContent
		const urlbef= menu.href

		menu.textContent = "Log Out";
		menu.href = ""

		const registerApp = document.querySelectorAll(".register-app")
		registerApp.forEach(item => item.style.setProperty("display", "none"))

		const registerInfo = document.querySelector(".register-info")
		const registerInfoBtn = document.querySelector(".register-info-btn")
		const infoText = document.querySelector(".register-info-text")

		registerInfo.textContent = "Explore our products"
		registerInfoBtn.href = "./products"
		infoText.textContent = "See Our Products"

		menu.addEventListener("click", ev => {
			ev.preventDefault();

			document.cookie = serializeCookie("logged", 'false')
			document.cookie = serializeCookie("username", "")
			// params_eng = parseCookie(document.cookie);

			location.reload()
		})
	}
}

const modify = param === -1 ? location.href : location.href.substring(0, param-1)
const target = (item) => modify + (modify.endsWith("/") ? "" : "/") + item		

const btn = document.querySelectorAll("#btn-register");
if(btn !== null && btn !== undefined) {
	btn.forEach(item => {
		item.addEventListener("click", async () => {
			document.body.style.setProperty("animation", "fade-out 0.8s ease");
			document.body.style.setProperty("animation-fill-mode", "both");
					
		// const result = await fetch(target)
		// const newBody = await result.text();
					
		// window.history.pushState({}, document.body, target);
		// document.documentElement.innerHTML = newBody;
			location.href = target("registration")
		})
	})
}
	
const item = {
	lampung_barat: [target("wp-content/uploads/2024/10/da4c038263129a207a8151a14cc242d0.jpeg"), 
		`
Registered Farmer   : 2.762
Urea                : 27.575 kg
SP36                : 164.550 kg
Total Purchase      : Rp. 440.508.750,00`
	],
	tanggamus: [target("wp-content/uploads/2024/10/3b1637b8078dae049c48d4168cddb10e.jpeg"),
`
Registered Farmer   : 4.060
Urea                            : 411.353 kg
SP36                           : 338.700 kg
Total Purchase          : Rp. 1.727.654.250,00
`
	],
	lampung_selatan: [target("wp-content/uploads/2024/10/dc16bc0569318e918c9e0e15073c8532.jpeg"),
`
Registered Farmer   : 2.762
Urea                            : 27.575 kg
SP36                           : 164.550 kg
Total Purchase          : Rp. 440.508.750,00
`
	],
	lampung_timur: [target("wp-content/uploads/2024/10/9338590d8656ba6a848aa147b098ad7a.jpeg"),
`
Registered Farmer  : 1.477
Urea                           : 125.798 kg
SP36                          : 57.852 kg
NPK                            : 2.500 kg
Total Purchase         : Rp. 421.055.100,00
`
	],
	lampung_tengah: [target("wp-content/uploads/2024/10/fe696218cce803122117faa065538818.jpeg"),
`
Registered Farmer   : 4.060
Urea                            : 411.353 kg
SP36                           : 338.700 kg
Total Purchase          : Rp. 1.727.654.250,00
`
	],
	lampung_utara: [target("wp-content/uploads/2024/10/b9548f4e03729c2bf442fcb9919c77d5.jpeg"),
`
Registered Farmer  : 1.477
Urea                           : 125.798 kg
SP36                          : 57.852 kg
NPK                            : 2.500 kg
Total Purchase         : Rp. 421.055.100,00
`
	],
	way_kanan: [target("wp-content/uploads/2024/10/fc5a3e89c7c3801b68908ac86671f157.jpeg"),
`
Registered Farmer   : 4.060
Urea                            : 411.353 kg
SP36                           : 338.700 kg
Total Purchase          : Rp. 1.727.654.250,00
`
	],
	tulang_bawang: [target("wp-content/uploads/2024/10/1a37d313777f49fddc319c82a9a87581.jpeg"),
`
Registered Farmer   : 4.060
Urea                            : 411.353 kg
SP36                           : 338.700 kg
Total Purchase          : Rp. 1.727.654.250,00
`
	],
	pesawaran: [target("wp-content/uploads/2024/10/d70d22229b3e0cd4a9c08e61ed2e48ee.jpeg"),
`
Registered Farmer  : 483
Urea                           : 46.829 kg
SP36                          : 286 kg
NPK                            : 7.000 kg
Total Purchase         : Rp. 179.395.250,00
`
	],
	pringsewu: [target("wp-content/uploads/2024/10/22eb6c4a41ce68076f02109787dbedb1.jpeg"),
`
Registered Farmer  : 483
Urea                           : 46.829 kg
SP36                          : 286 kg
NPK                            : 7.000 kg
Total Purchase         : Rp. 179.395.250,00
`
	],
	mesuji: [target("wp-content/uploads/2024/10/6d486203a740ca7aa75c4d222b875efc.jpeg"),
`
Registered Farmer  : 483
Urea                           : 46.829 kg
SP36                          : 286 kg
NPK                            : 7.000 kg
Total Purchase         : Rp. 179.395.250,00
`
	],
	tulang_bawang_barat: [target("wp-content/uploads/2024/10/c6ebeb22973f46f069fa264a96f28f0d.jpeg"),
`
Registered Farmer  : 483
Urea                           : 46.829 kg
SP36                          : 286 kg
NPK                            : 7.000 kg
Total Purchase         : Rp. 179.395.250,00
`
	],
	pesisir_barat: [target("wp-content/uploads/2024/10/df9cc9bcc02d925e09b71594f8a44cfb.jpeg"),
`
Registered Farmer  : 1.477
Urea                           : 125.798 kg
SP36                          : 57.852 kg
NPK                            : 2.500 kg
Total Purchase         : Rp. 421.055.100,00
`
	],
	bandar_lampung: [target("wp-content/uploads/2024/10/98bc6bbb383b1b4fcb288804208331ae.jpeg"),
`
Registered Farmer   : 4.060
Urea                            : 411.353 kg
SP36                           : 338.700 kg
Total Purchase          : Rp. 1.727.654.250,00
`
	],
	metro: [target("wp-content/uploads/2024/10/cb9e6d8964fc1fbaa4ab25bea136c077.jpeg"),
`
Registered Farmer  : 1.477
Urea                           : 125.798 kg
SP36                          : 57.852 kg
NPK                            : 2.500 kg
Total Purchase         : Rp. 421.055.100,00
`
	],
	provinsi_lampung: [target("wp-content/uploads/2024/10/6baee5b372a141c0f6d9b4ce74b73fbb.jpeg"),
`
Registered Farmer  : 1.477
Urea                           : 125.798 kg
SP36                          : 57.852 kg
NPK                            : 2.500 kg
Total Purchase         : Rp. 421.055.100,00
`
	]
}

function modalPopup(img, title, info) {
	const modal = document.createElement("div")
	modal.classList.add("popup-page")

	modal.innerHTML = `
		<div class="modal-inner">
			<div class="left-side">
				<img src="${img}">
			</div>
			<div class="right-side">
				<i class="fas fa-plus"></i>
				<h3>${title}</h3>
				<p>${info.substring(1, info.length).replaceAll("\n", "<br/>")}</p>
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

console.log("loaded")


function itemTemplate(name, path, info) {
	const div = document.createElement("div")
	div.classList.add("items-region")

	const content = name.replaceAll("_", " ").split(" ").map(item => item[0].toUpperCase() + item.substring(1, item.length)).join(" ").trim()   

	div.innerHTML = `
		<img class="thumbnail-region" src="${path}">
		<div class="descriptions">
			<p>
				${content}
			</p>
		</div>
	`
	div.addEventListener("click", ev => {
		document.body.append(modalPopup(path, content, info))
	})

	return div
}
	
const scrollableItem = document.querySelector(".scrollable-item")
if(scrollableItem !== null || scrollableItem !== undefined) {
	for (let key of Object.keys(item)) {
		const card = itemTemplate(key, item[key][0], item[key][1])
		scrollableItem.append(card)
	}
}

