/* eslint-disable perfectionist/sort-object-types */
import type { InputScoresResponse } from "@/lib/api/callBackendApi";
import type { Prettify } from "@zayne-labs/toolkit/type-helpers";
import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

export type StepOneData = {
	email: string;
	logo?: File;
	name: string;
};

export type StepTwoData = {
	nationality: string;
	address: string;
	state: string;
	local_govt: string;
	postal_code: number | null;
};

export type RegisterFormStore = {
	formStepData: Prettify<StepOneData & StepTwoData>;

	actions: {
		resetFormStore: () => void;

		updateFormData: (updatedFormData: Partial<RegisterFormStore["formStepData"]>) => void;
	};
};

const initialRegisterFormState = {
	formStepData: {
		address: "",
		email: "",
		local_govt: "",
		name: "",
		nationality: "",
		postal_code: null,
		state: "",
	},
} satisfies Omit<RegisterFormStore, "actions">;

const registerStateObjectFn: StateCreator<RegisterFormStore> = (set, get) => ({
	...initialRegisterFormState,

	actions: {
		resetFormStore: () => set(initialRegisterFormState),

		updateFormData: (updatedFormData) => {
			const { formStepData } = get();

			set({ formStepData: { ...formStepData, ...updatedFormData } });
		},
	} satisfies RegisterFormStore["actions"],
});

export const useRegisterFormStore = create(
	persist(registerStateObjectFn, {
		name: "registerFormStepData",
		partialize: ({ formStepData }) => ({ formStepData }),
		version: 3,
	})
);

type InputScoresFormStore = {
	responseData: InputScoresResponse;
	actions: {
		resetFormStore: () => void;
	};
};

const initialInputScoreFormState = {
	responseData: {
		class_session_term: {
			school_class: "",
			session: "",
			term: "",
		},
		students: [],
	},
} satisfies Omit<InputScoresFormStore, "actions">;

const inputScoreStateObjectFn: StateCreator<InputScoresFormStore> = (set) => ({
	...initialInputScoreFormState,

	actions: {
		resetFormStore: () => set(initialInputScoreFormState),
	},
});

export const useInputScoreFormStore = create(
	persist(inputScoreStateObjectFn, {
		name: "inputScoreFormResponseData",
		partialize: ({ responseData }) => ({ responseData }),
		version: 3,
	})
);
