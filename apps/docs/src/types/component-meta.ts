export interface ComponentMeta {
	slug: string;
	title: string;
	description: string;
	status: 'Ready' | 'In progress' | 'New' | 'Deprecated';
	preview?: string;
	preview_component?: string;
}
