export type LoginData = {
	access: string;
	email: string;
	refresh: string;
	school: string;
};

export type ClassGradeData = {
	grade: string;
	school_class: string;
};

export type ClassData = {
	school_class: string;
	subject_names: string[];
};

export type AllClasses = string[];

export type AllSubjects = string[];
