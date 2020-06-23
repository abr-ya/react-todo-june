export interface IApp {
	showLoading: () => void;
	hideLoading: (data: boolean) => void;
	requestProductsSaga: () => void;
	addToCart: (id: number) => void;
	delFromCart: (id: number) => void;
	loading: boolean;
	data?: any[];
}

export interface IFormBS {
	addNote: (text: string) => void;
}

export interface IFormBSState {
	text: string;
}

export interface INotes {
	data: string[];
}

export interface IItem {
	text: string;
}
