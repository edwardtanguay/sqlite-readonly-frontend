export interface IRawFlashcard {
	id: number;
	category: string;
	categoryName: string;
	front: string;
	back: string;
}

export interface IFlashcard extends IRawFlashcard {
	isOpen: boolean;
	backHtml: string;
}

export interface ICategoryItem {
	categoryIdCode: string;
	categoryName: string;
	total: number;
}