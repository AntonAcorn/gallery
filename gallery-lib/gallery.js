class Gallery {
	constructor(element, options = {}) {
		this.containerNode = element;
		console.log(this.containerNode);
		this.size = element.childElementCount;
		this.currentSlide = 0;

		this.manageHTML = this.manageHTML.bind(this);
		this.manageHTML();
	}

	manageHTML () {
		
	}
}