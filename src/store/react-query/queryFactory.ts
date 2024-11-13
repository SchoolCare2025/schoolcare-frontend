import {
	type AllClasses,
	type AllStudentsByClass,
	type ClassGradeData,
	callBackendApi,
} from "@/lib/api/callBackendApi";
import { checkUserSession } from "@/lib/api/callBackendApi/utils";
import { queryOptions } from "@tanstack/react-query";

export const sessionQuery = () => {
	return queryOptions({
		queryFn: () => checkUserSession(),
		queryKey: ["session"],
		refetchInterval: 10 * 60 * 1000,
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

export const classGradesQuery = () => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<ClassGradeData[], unknown, "onlySuccess">("/school/class-grades", {
				resultMode: "onlySuccess",
				throwOnError: true,
			});
		},
		queryKey: ["class-grades"],
		staleTime: Infinity,
	});
};

export const studentsByClassQuery = (studentClass: string) => {
	return queryOptions({
		queryFn: () => {
			return callBackendApi<AllStudentsByClass, unknown, "onlySuccess">(
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
