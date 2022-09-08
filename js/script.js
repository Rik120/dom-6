window.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items')

	function hideTabContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide')
			item.classList.remove('show', 'fade')
		})

		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active')
		})
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade')
		tabsContent[i].classList.remove('hide')
		tabs[i].classList.add('tabheader__item_active')
	}

	hideTabContent()
	showTabContent()

	tabsParent.addEventListener('click', (event) => {
		const target = event.target

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent()
					showTabContent(i)
				}
			})
		}
	})


	const modalTrigger = document.querySelectorAll('[data-modal]'),
		modal = document.querySelector('.modal'),
		modalCloseBtn = document.querySelector('[data-close]')

	function showModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = 'hidden'
		clearInterval(modalTimer)
	}

	modalTrigger.forEach((btn) => {
		btn.addEventListener('click', showModal)
	})

	modalCloseBtn.addEventListener('click', hideModal)

	function hideModal() {
		modal.classList.toggle('show')
		document.body.style.overflow = ''
	}

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			hideModal()
		}
	})

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			hideModal()
		}
	})

	const modalTimer = setTimeout(showModal, 5000)

	function showModalByscroll() {
		if (
			window.pageYOffset + document.documentElement.clientHeight >=
			document.documentElement.scrollHeight
		) {
			showModal()
			window.removeEventListener('scroll', showModalByscroll)
		}
	}

	window.addEventListener('scroll', showModalByscroll)
})


let days = document.querySelector('#days')

let hours = document.querySelector('#hours')

let minutes = document.querySelector('#minutes')

let seconds = document.querySelector('#seconds')


let timer = setInterval(() => {

	seconds.innerHTML--

	if (seconds.innerHTML == -1) {

		seconds.innerHTML = 59

		minutes.innerHTML--

		if (minutes.innerHTML == -1) {

			minutes.innerHTML =

				hours.innerHTML--

			console.log(hours.innerHTML);

			if (hours.innerHTML == -1) {

				hours.innerHTML = 23

				days.innerHTML--

				if (days.innerHTML == -1) {

					clearInterval(timer)

					days.innerHTML = 0

					hours.innerHTML = 0

					minutes.innerHTML = 0

					seconds.innerHTML = 0

				}
			}
		}
	}
}, 1000);

let btnL = document.querySelector(".offer__slider-prev")

let btnR = document.querySelector(".offer__slider-next")

let number = document.querySelector("#current")

btnL.onclick = () => {
	number.innerHTML--

	if (number.innerHTML == 0) {
		number.innerHTML = 4

	} else if (number.innerHTML == 4) {

		img.setAttribute("src", "img/slider/olive-oil.jpg")

	} else if (number.innerHTML == 3) {

		img.setAttribute("src", "img/slider/paprika.jpg")

	} else if (number.innerHTML == 2) {

		img.setAttribute("src", "img/slider/pepper.jpg")

	} else if (number.innerHTML == 1) {

		img.setAttribute("src", "img/slider/food-12.jpg")

	}

	console.log("1");
}

btnR.onclick = () => {
	number.innerHTML++

	if (number.innerHTML == 5) {
		number.innerHTML = 1

	} else if (number.innerHTML == 1) {

		img.setAttribute("src", "img/slider/olive-oil.jpg")

	} else if (number.innerHTML == 2) {

		img.setAttribute("src", "img/slider/paprika.jpg")

	} else if (number.innerHTML == 3) {

		img.setAttribute("src", "img/slider/pepper.jpg")

	} else if (number.innerHTML == 4) {

		img.setAttribute("src", "img/slider/food-12.jpg")

	}

	console.log("2");
}


let user = {

	gender: "woman"

}

let genderBtn = document.querySelectorAll("div#gender .calculating__choose-item")

let height = document.querySelector("#height")

let weight = document.querySelector("#weight")

let age = document.querySelector("#age")

let activeBtn = document.querySelectorAll("[data-active]")

let resultSpan = document.querySelector("#result")

genderBtn.forEach(btn => {

	btn.onclick = () => {

		genderBtn.forEach(a => a.classList.remove('calculating__choose-item_active'))

		btn.classList.add('calculating__choose-item_active')

		user.gender = btn.getAttribute('data-gender')

	}

})

height.onkeyup = () => {

	user.height = height.value

}

weight.onkeyup = () => {

	user.weight = weight.value

}

age.onkeyup = () => {

	user.age = age.value

}

activeBtn.forEach(item => {

	item.onclick = () => {

		activeBtn.forEach(a => a.classList.remove('calculating__choose-item_active'))

		item.classList.add('calculating__choose-item_active')

		user.act = item.getAttribute('data-active')

		// Формула Харрисона-Бенедикта расчет калорийности

		if (user.gender === 'woman') {

			let result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age)

			resultSpan.innerHTML = Math.round(result * user.act)

		} else {

			let result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age)

			resultSpan.innerHTML = Math.round(result * user.act)
		}

	}
})