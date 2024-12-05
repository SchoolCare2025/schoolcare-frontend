import {
	type AllClasses,
	type AllStudentsInSchool,
	type AllSubjects,
	type AllSubjectsInSchool,
	type ClassesData,
	type StudentsByClassOrID,
	callBackendApi,
} from "@/lib/api/callBackendApi";
import { checkUserSession } from "@/lib/api/callBackendApi/utils";
import { queryOptions } from "@tanstack/react-query";

export const sessionQuery = () => {
	return queryOptions({
		queryFn: () => checkUserSession(),
		queryKey: ["session"],
		refetchInterval: 9 * 60 * 1000,
		retry: false,
		staleTime: Infinity,
	});
};

export const allClassesQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<AllClasses, unknown, "onlySuccess">("/main-class", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["classes-all"],
		staleTime: Infinity,
	});
};

export const allClassesInSchoolQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<ClassesData[], unknown, "onlySuccess">("/school/classes", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["classes", "school"],
		staleTime: Infinity,
	});
};

export const allSubjectsQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<AllSubjects, unknown, "onlySuccess">("/main-subject", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["subjects-all"],
		staleTime: Infinity,
	});
};

export const allSubjectsInSchoolQuery = (school = "") => {
	return queryOptions({
		enabled: Boolean(school),
		queryFn: () => {
			return callBackendApi<AllSubjectsInSchool, unknown, "onlySuccess">("/school/subjects", {
				query: {
					school,
				},
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["subjects", ...(school ? [{ school }] : [])],
		staleTime: Infinity,
	});
};

export const allStudentsInSchoolQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<AllStudentsInSchool, unknown, "onlySuccess">("/school/students", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["students", "school"],
		staleTime: Infinity,
	});
};

export const studentsByClassQuery = (studentClass: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<{ students: StudentsByClassOrID[] }, unknown, "onlySuccess">(
				"/school/students/class-students",
				{
					meta: {
						toast: {
							success: true,
						},
					},
					query: {
						class: studentClass,
					},
					resultMode: "onlySuccess",
					throwOnError: true,
				}
			);
		},
		queryKey: ["students", "school", { class: studentClass }],
		staleTime: Infinity,
	});
};

export const studentsByIDQuery = (studentId: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<StudentsByClassOrID, unknown, "onlySuccess">(
				"/school/students/students-by-reg-number",
				{
					meta: {
						toast: {
							success: true,
						},
					},
					query: {
						reg: studentId,
					},
					resultMode: "onlySuccess",
					throwOnError: true,
				}
			);
		},
		queryKey: ["students", "school", { id: studentId }],
		staleTime: Infinity,
	});
};

export const schoolSessionQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<string[], unknown, "onlySuccess">("/session", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["school-session"],
		staleTime: Infinity,
	});
};

export const schoolTermQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<string[], unknown, "onlySuccess">("/term", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["school-term"],
		staleTime: Infinity,
	});
};
