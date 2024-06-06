const GalleryClassName = 'gallery';
const GalleryLineClassName = 'gallery-line';
const GallerySlideClassName = 'gallery-slide';

class Gallery {
	constructor(element, options = {}) {
		this.containerNode = element;
		console.log(this.containerNode);
		this.size = element.childElementCount;
		console.log(this.size);
		this.currentSlide = 0;

		this.manageHTML = this.manageHTML.bind(this);
		this.manageHTML();
	}

	manageHTML() {
		this.containerNode.classList.add(GalleryClassName)
		this.containerNode.innerHTML = `
			<div class="${GalleryLineClassName}">
				${this.containerNode.innerHTML}
			</div>
		`;

		this.lineNode = this.containerNode.querySelector(`.${GalleryLineClassName}`);
		console.log(this.lineNode);
		this.slidesNodes = Array.from(this.lineNode.children).map((childNode) =>
			wrapElementByDiv({
				element: childNode,
				className: GallerySlideClassName
			})
		);
		console.log(this.slidesNodes);
	}
}

// Helpers
function wrapElementByDiv({element, className}) {
	const wrapperNode = document.createElement('div');
	wrapperNode.classList.add(className);

	element.parentNode.insertBefore(wrapperNode, element);
	wrapperNode.appendChild(element);

	return wrapperNode;
}

