import { useQueryClientStore } from "./queryClientStore";
import {
	allClassesInSchoolQuery,
	allStudentsInSchoolQuery,
	allSubjectsInSchoolQuery,
	sessionQuery,
	studentsGenderQuery,
} from "./queryFactory";

export const protectionLoader = () => {
	void useQueryClientStore.getState().queryClient.prefetchQuery(sessionQuery());
};

export const dashboardLoader = () => {
	void useQueryClientStore.getState().queryClient.prefetchQuery(allStudentsInSchoolQuery());

	void useQueryClientStore.getState().queryClient.prefetchQuery(allSubjectsInSchoolQuery());

	void useQueryClientStore.getState().queryClient.prefetchQuery(allClassesInSchoolQuery());

	void useQueryClientStore.getState().queryClient.prefetchQuery(studentsGenderQuery());
};
