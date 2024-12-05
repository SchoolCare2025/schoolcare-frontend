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

export type AllSubjectsInSchool = Array<{ subject: string }>;

export type AllStudentsInSchool = Array<{ gender: string; name: string; school_class: string }>;

export type StudentsByClassOrID = {
	gender: string;
	name: string;
	registration_number: string;
};

export type InputScoresResponse = {
	class_session_term: {
		school_class: string;
		session: string;
		term: string;
	};
	students: Array<{
		name: string;
		reg_number: string;
	}>;
};

export type SessionData = {
	email: string;
	school: string;
};
