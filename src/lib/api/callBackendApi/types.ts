export type LoginData = {
	access: string;
	email: string;
	logo: string;
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

export type StudentsGenderResponse = {
	female: number;
	male: number;
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
	logo: string;
	school: string;
};

export type CheckResultResponse = {
	average: number;
	class_session_term: string;
	class_students_count: number;
	comment: string;
	gender: string;
	logo: string;
	position: number;
	results: Array<{
		class_session_term: number;
		exam: number;
		first_ca: number;
		grade: string;
		remark: string;
		second_ca: number;
		student: number;
		subject: number;
		total: number;
	}>;
	school: string;
	school_address: string;
	school_email: string;
	student_name: string;
	student_reg_number: string;
	subject_count: number;
	total_score: number;
	use_count: number;
};
