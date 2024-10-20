import { toast } from "sonner";

const validateTagValue = (tagsArray: string[], newTag: string | undefined) => {
	if (!newTag) return;

	if (tagsArray.length >= 5) {
		toast.error("Error", {
			description: "Cannot add more than 5 tags",
		});

		return;
	}

	return newTag;
};

export { validateTagValue };
