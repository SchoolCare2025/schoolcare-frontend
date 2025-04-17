import {
	type AllClasses,
	type AllStudentsInSchool,
	type AllSubjects,
	type AllSubjectsInSchool,
	type ClassesData,
	type StudentsByClassOrID,
	callBackendApiForQuery,
} from "@/lib/api/callBackendApi";
import { checkUserSession } from "@/lib/api/callBackendApi/plugins/utils";
import { queryOptions } from "@tanstack/react-query";
import type { CallApiExtraOptions } from "@zayne-labs/callapi";

export const sessionQuery = () => {
	return queryOptions({
		queryFn: () => checkUserSession(),
		queryKey: ["session"],
		refetchInterval: 9 * 60 * 1000, // 9 minutes
		retry: false,
		staleTime: Infinity,
	});
};

export const allClassesQuery = () => {
	return queryOptions({
		queryFn: () => callBackendApiForQuery<AllClasses>("/main-class"),
		queryKey: ["classes-all"],
		staleTime: Infinity,
	});
};

export const allClassesInSchoolQuery = () => {
	return queryOptions({
		queryFn: () => callBackendApiForQuery<ClassesData[]>("/school/classes"),
		queryKey: ["classes", "school"],
		staleTime: Infinity,
	});
};

export const allSubjectsQuery = () => {
	return queryOptions({
		queryFn: () => callBackendApiForQuery<AllSubjects>("/main-subject"),
		queryKey: ["subjects-all"],
		staleTime: Infinity,
	});
};

export const allSubjectsInSchoolQuery = (school = "") => {
	return queryOptions({
		enabled: Boolean(school),
		queryFn: () =>
			callBackendApiForQuery<AllSubjectsInSchool>("/school/subjects", { query: { school } }),
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["subjects", ...(school ? [{ school }] : [])],
		staleTime: Infinity,
	});
};

export const allStudentsInSchoolQuery = () => {
	return queryOptions({
		queryFn: () => callBackendApiForQuery<AllStudentsInSchool>("/school/students"),
		queryKey: ["students", "school"],
		staleTime: Infinity,
	});
};

export const studentsByClassQuery = (studentClass: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApiForQuery<{ students: StudentsByClassOrID[] }>(
				"/school/students/class-students",
				{
					meta: { toast: { success: true } },
					query: { class: studentClass },
				}
			);
		},
		queryKey: ["students", "school", { class: studentClass }],
		staleTime: Infinity,
	});
};

export const studentsByIDQuery = (
	options: Pick<CallApiExtraOptions, "onSuccess"> & { studentId: string }
) => {
	const { onSuccess, studentId } = options;

	return queryOptions({
		queryFn: () => {
			return callBackendApiForQuery<StudentsByClassOrID>("/school/students/students-by-reg-number", {
				meta: { toast: { errorMessageField: "reg", success: true } },
				onSuccess,
				query: { reg: studentId },
			});
		},
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["students", "school", { id: studentId }],
		staleTime: Infinity,
	});
};

export const studentsGenderQuery = () => {
	return queryOptions({
		queryFn: () =>
			callBackendApiForQuery<{ female: number; male: number }>("/school/students/students-by-gender"),
		queryKey: ["students", "school", "gender-ratio"],
		staleTime: Infinity,
	});
};

export const schoolSessionQuery = (options?: { meta?: CallApiExtraOptions["meta"] }) => {
	const { meta } = options ?? {};

	return queryOptions({
		queryFn: () =>
			callBackendApiForQuery<string[]>("/session", { meta: { skipAuthHeaderAddition: true, ...meta } }),
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["school-session"],
		staleTime: Infinity,
	});
};

export const schoolTermQuery = (options?: { meta?: CallApiExtraOptions["meta"] }) => {
	const { meta } = options ?? {};

	return queryOptions({
		queryFn: () =>
			callBackendApiForQuery<string[]>("/term", { meta: { skipAuthHeaderAddition: true, ...meta } }),
		// eslint-disable-next-line tanstack-query/exhaustive-deps
		queryKey: ["school-term"],
		staleTime: Infinity,
	});
};
