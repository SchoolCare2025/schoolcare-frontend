import { toast } from "sonner";

const validateInputValue = (existingValues: string[], newValue: string | undefined) => {
	if (!newValue) return;

	if (existingValues.includes(newValue)) {
		toast.error("Error", {
			description: `${newValue} already exists`,
		});

		return;
	}

	return newValue;
};

export { validateInputValue };
