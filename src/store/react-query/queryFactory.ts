import {
	type AllClasses,
	type AllSubjects,
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
		queryKey: ["all-classes"],
		staleTime: Infinity,
	});
};

export const classesQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<ClassesData[], unknown, "onlySuccess">("/school/classes", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["class-grades"],
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
		queryKey: ["subjects"],
		staleTime: Infinity,
	});
};

export const studentsByClassQuery = (studentClass: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<StudentsByClassOrID, unknown, "onlySuccess">(
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
		queryKey: ["students", studentClass],
		staleTime: 2 * 60 * 1000,
	});
};

export const studentsByIDQuery = (studentId: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<StudentsByClassOrID, unknown, "onlySuccess">("/school/students/:id", {
				meta: {
					toast: {
						success: true,
					},
				},
				params: {
					id: studentId,
				},
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["students", studentId],
		staleTime: 2 * 60 * 1000,
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

export const schoolSubjectsQuery = (school: string) => {
	return queryOptions({
		enabled: Boolean(school),
		queryFn: () => {
			return callBackendApi<Array<{ subject: string }>, unknown, "onlySuccess">("/school/subjects", {
				query: {
					school,
				},
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["school-subjects", school],
		staleTime: Infinity,
	});
};
