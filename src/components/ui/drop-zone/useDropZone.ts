import { cnMerge } from "@/lib/utils/cn";
import { type FileValidationOptions, handleFileValidation } from "@zayne-labs/toolkit";
import { useCallbackRef, useToggle } from "@zayne-labs/toolkit/react";
import { isFunction, isObject } from "@zayne-labs/toolkit/type-helpers";
import { type ChangeEvent, type DragEvent, useRef, useState } from "react";
import { toast } from "sonner";

type RenderProps = {
	acceptedFiles: File[];
	inputRef: React.RefObject<HTMLInputElement>;
	isDragging: boolean;
};

type InputProps = Omit<React.ComponentPropsWithRef<"input">, "children" | "onDrop"> & {
	children?: React.ReactNode | ((props: RenderProps) => React.ReactNode);
	classNames?: { activeDragState?: string; base?: string; input?: string };
};

export type DropZoneProps = {
	allowedFileTypes?: string[];

	disableInbuiltValidation?: boolean;

	existingFiles?: File[];

	onUpload: (details: {
		acceptedFiles: File[];
		event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>;
	}) => void;

	onUploadError?: FileValidationOptions["onError"];

	onUploadSuccess?: FileValidationOptions["onSuccess"];

	validationSettings?: {
		disallowDuplicates?: boolean;
		fileLimit?: number;
		maxFileSize?: number;
	};

	validator?: (context: { existingFileArray: File[] | undefined; newFileList: FileList }) => File[];
};

export type UseDropZoneProps = DropZoneProps & InputProps;

const useDropZone = (props: UseDropZoneProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const {
		accept,
		allowedFileTypes,
		children,
		className,
		classNames,
		disableInbuiltValidation,
		existingFiles,
		onChange,
		onUpload,
		onUploadError,
		onUploadSuccess,
		ref,
		validationSettings,
		validator,
		...restOfInputProps
	} = props;

	const [isDragging, toggleIsDragging] = useToggle(false);

	const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

	const handleFileUpload = useCallbackRef(
		(event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLDivElement>) => {
			if (event.type === "drop") {
				event.preventDefault();
				toggleIsDragging(false);
			}

			const fileList =
				event.type === "drop"
					? (event as DragEvent).dataTransfer.files
					: (event as ChangeEvent<HTMLInputElement>).target.files;

			if (fileList === null) {
				toast.error("Error", {
					description: "No file selected",
				});

				return;
			}

			const inbuiltValidatedFilesArray = !disableInbuiltValidation
				? handleFileValidation({
						existingFileArray: existingFiles,
						newFileList: fileList,
						onError: onUploadError,
						onSuccess: onUploadSuccess,
						validationSettings: isObject(validationSettings)
							? { ...validationSettings, allowedFileTypes }
							: {},
					})
				: [];

			const validatorFnFileArray = validator
				? validator({ existingFileArray: existingFiles, newFileList: fileList })
				: [];

			const validFilesArray = [...inbuiltValidatedFilesArray, ...validatorFnFileArray];

			if (validFilesArray.length === 0) return;

			setAcceptedFiles(validFilesArray);

			onUpload({ acceptedFiles: validFilesArray, event });
		}
	);

	const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		toggleIsDragging(true);
	};

	const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
		toggleIsDragging(false);
	};

	const getRenderProps = () => ({ acceptedFiles, inputRef, isDragging }) satisfies RenderProps;

	const getChildren = () => (isFunction(children) ? children(getRenderProps()) : children);

	const getRootProps = () => ({
		className: cnMerge(
			"relative isolate flex w-fit flex-col",
			classNames?.base,
			isDragging && ["opacity-60", classNames?.activeDragState]
		),
		onDragLeave: handleDragLeave,
		onDragOver: handleDragOver,
		onDrop: handleFileUpload,
	});

	const refCallback: React.RefCallback<HTMLInputElement> = useCallbackRef((node) => {
		inputRef.current = node;

		if (!ref) return;

		if (isFunction(ref)) {
			return ref(node);
		}

		(ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
	});

	const getInputProps = (): InputProps => ({
		accept: allowedFileTypes ? allowedFileTypes.join(", ") : accept,
		className: cnMerge(
			"absolute inset-0 z-[100] cursor-pointer opacity-0",
			className,
			classNames?.input
		),
		onChange: (event: ChangeEvent<HTMLInputElement>) => {
			handleFileUpload(event);
			onChange?.(event);
		},
		ref: refCallback,
		type: "file",
		...restOfInputProps,
	});

	return {
		getChildren,
		getInputProps,
		getRenderProps,
		getRootProps,
		handleDragLeave,
		handleDragOver,
		handleFileUpload,
		isDragging,
		ref,
	};
};

export { useDropZone };
