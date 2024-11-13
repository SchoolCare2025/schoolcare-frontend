/* eslint-disable perfectionist/sort-object-types */
import type { Prettify } from "@zayne-labs/toolkit/type-helpers";
import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";

export type StepOneData = {
	email: string;
	logo?: File;
	name: string;
	school_ID: string;
};

export type StepTwoData = {
	nationality: string;
	address: string;
	state: string;
	local_govt: string;
	postal_code: number | null;
};

export type FormStore = {
	formStepData: Prettify<StepOneData & StepTwoData>;

	actions: {
		resetFormStore: () => void;

		updateFormData: (updatedFormData: Partial<FormStore["formStepData"]>) => void;
	};
};

const initialFormState = {
	formStepData: {
		address: "",
		email: "",
		local_govt: "",
		name: "",
		nationality: "",
		postal_code: null,
		school_ID: "",
		state: "",
	},
} satisfies Omit<FormStore, "actions">;

const stateObjectFn: StateCreator<FormStore> = (set, get) => ({
	...initialFormState,

	actions: {
		resetFormStore: () => set(initialFormState),

		updateFormData: (updatedFormData) => {
			const { formStepData } = get();

			set({ formStepData: { ...formStepData, ...updatedFormData } });
		},
	} satisfies FormStore["actions"],
});

export const useFormStore = create(
	persist(stateObjectFn, {
		name: "formStepData",
		partialize: ({ formStepData }) => ({ formStepData }),
		version: 3,
	})
);
