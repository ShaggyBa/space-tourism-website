const tabs: NodeListOf<Element> = document.querySelectorAll(".tab--btn");

const tabsContent: NodeListOf<Element> = document.querySelectorAll(".tab__content");

tabs.forEach((tab: Element, index: number) => {
	tab.addEventListener("click", () => {
		tabs.forEach((tab, index) => {
			tab.classList.remove("active");
			tabsContent[index].classList.remove("active");
		})
		tab.classList.add('active')
		tabsContent[index].classList.add('active')
	})
})