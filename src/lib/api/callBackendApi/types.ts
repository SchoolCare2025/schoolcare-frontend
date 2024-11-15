export type LoginData = {
	access: string;
	email: string;
	refresh: string;
	school: string;
};

export type ClassesData = {
	grade: string;
	school_class: string;
};

export type SchoolClassData = {
	school_class: string;
	subject_names: string[];
};

export type AllClasses = string[];

export type AllSubjects = string[];

export type StudentsByClassOrID = {
	gender: string;
	name: string;
	school_class: string;
};
