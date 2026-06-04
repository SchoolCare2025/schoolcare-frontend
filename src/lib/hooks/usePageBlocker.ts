import { useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type PageBlockerOptions = {
	condition: boolean;
	message: string;
	redirectDelay?: number;
	redirectPath: string;
};

const usePageBlocker = (options: PageBlockerOptions) => {
	const { condition, message, redirectDelay = 800, redirectPath } = options;

	const navigate = useNavigate();

	useEffect(() => {
		if (!condition) return;

		const timeout = setTimeout(() => {
			toast.error(message);
			void navigate(redirectPath, { replace: true });
		}, redirectDelay);

		return () => clearTimeout(timeout);
	}, [navigate, condition, message, redirectPath, redirectDelay]);
};

export { usePageBlocker };
