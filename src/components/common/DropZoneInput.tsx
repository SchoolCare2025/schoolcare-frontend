import { cnMerge } from "@/lib/utils/cn";
import { isFile } from "@zayne-labs/toolkit-type-helpers";
import { toast } from "sonner";
import { DropZone, type DropZoneActions, type DropZoneProps, type FileWithPreview } from "../ui/drop-zone";
import { getElementList } from "./For";
import { IconBox } from "./IconBox";
import { Switch } from "./Switch";

type DropZoneInputProps = DropZoneProps & {
	onChange: (file: File | null) => void;
};

export function DropZoneInput(props: DropZoneInputProps) {
	const { onChange, onFilesChange, onUploadError, onUploadSuccess, ...restOfProps } = props;

	const handleFileUpload: DropZoneProps["onFilesChange"] = (ctx) => {
		onFilesChange?.(ctx);

		if (!isFile(ctx.filesWithPreview[0]?.file)) return;

		onChange(ctx.filesWithPreview[0]?.file);
	};

	return (
		<DropZone.Root
			onFilesChange={handleFileUpload}
			onUploadError={(ctx) => {
				toast.error("Error", { description: ctx.message });
				onUploadError?.(ctx);
			}}
			onUploadSuccess={(ctx) => {
				toast.success("Success", { description: ctx.message });
				onUploadSuccess?.(ctx);
			}}
			{...restOfProps}
		/>
	);
}

type ImagePreviewProps = {
	classNames?: {
		image?: string;
		listContainer?: string;
		listItem?: string;
	};
	filesWithPreview: FileWithPreview[];
	removeFile?: DropZoneActions["removeFile"];
};

export function DropZoneInputImagePreview(props: ImagePreviewProps) {
	const { classNames, filesWithPreview, removeFile } = props;

	const [ImagePreviewList] = getElementList();

	if (filesWithPreview.length === 0) return;

	return (
		<ImagePreviewList
			className={cnMerge(
				`relative mt-[13px] max-h-[140px] divide-y divide-gray-600 overflow-y-auto overscroll-y-contain
				rounded-md border border-gray-600`,
				classNames?.listContainer
			)}
			each={filesWithPreview}
			render={(fileWithPreview) => {
				return (
					<li
						key={fileWithPreview.id}
						className={cnMerge(
							"flex items-center justify-between p-2 text-xs",
							classNames?.listItem
						)}
					>
						<div className="flex h-[48px] min-w-0 items-center gap-4 md:h-[66px]">
							<Switch.Root>
								<Switch.Match when={fileWithPreview.file.type.startsWith("image")}>
									<img
										src={fileWithPreview.preview}
										className={cnMerge(
											"size-[50px] shrink-0 rounded-md object-cover",
											classNames?.image
										)}
										fetchPriority="high"
										alt="image-preview-thumbnail"
									/>
								</Switch.Match>

								<Switch.Match when={fileWithPreview.file.type.includes("pdf")}>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:document-medicine-linear" className="size-full" />
									</span>
								</Switch.Match>

								<Switch.Default>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:file-outline" className="size-full" />
									</span>
								</Switch.Default>
							</Switch.Root>

							<p className="truncate">{fileWithPreview.file.name}</p>
						</div>

						<button type="button" onClick={() => removeFile?.(fileWithPreview)}>
							<IconBox
								icon="lucide:trash-2"
								className="size-[20px] text-red-600 active:scale-[1.1]"
							/>
						</button>
					</li>
				);
			}}
		/>
	);
}

// export function DropZoneImagePreview(props: ImagePreviewProps) {
// 	const { classNames, onChange, value } = props;

// 	const newFilesArray = toArray(value).filter(Boolean);

// 	const [ImagePreviewList] = getElementList();

// 	if (newFilesArray.length === 0) return;

// 	const handleRemoveImage = (file: File) => () => {
// 		const updatedFileState = newFilesArray.filter((item) => {
// 			if (isFile(item) && isFile(file)) {
// 				return !(item.name === file.name && item.size === file.size);
// 			}

// 			return false;
// 		});

// 		onChange(updatedFileState);
// 	};

// 	return (
// 		<ImagePreviewList
// 			className={cnMerge(
// 				`relative mt-[13px] max-h-[140px] divide-y divide-gray-600 overflow-y-auto overscroll-y-contain
// 				rounded-md border border-gray-600`,
// 				classNames?.listContainer
// 			)}
// 			each={newFilesArray}
// 			render={(file) => {
// 				return (
// 					<li
// 						key={isFile(file) ? file.name : file}
// 						className={cnMerge(
// 							"flex items-center justify-between p-2 text-xs",
// 							classNames?.listItem
// 						)}
// 					>
// 						<div className="flex min-h-[66px] min-w-0 items-center gap-4">
// 							<Switch.Root>
// 								<Switch.Match
// 									when={(isFile(file) && file.type.startsWith("image")) || isString(file)}
// 								>
// 									<img
// 										src={isFile(file) ? URL.createObjectURL(file) : file}
// 										className={cnMerge(
// 											"size-[50px] shrink-0 rounded-md object-cover",
// 											classNames?.image
// 										)}
// 										width={50}
// 										height={50}
// 										fetchPriority="high"
// 										alt="image-preview-thumbnail"
// 									/>
// 								</Switch.Match>

// 								<Switch.Match when={isFile(file) && file.type.includes("pdf")}>
// 									<span className="block size-[40px] shrink-0">
// 										<IconBox icon="solar:document-medicine-linear" className="size-full" />
// 									</span>
// 								</Switch.Match>

// 								<Switch.Default>
// 									<span className="block size-[40px] shrink-0">
// 										<IconBox icon="solar:file-outline" className="size-full" />
// 									</span>
// 								</Switch.Default>
// 							</Switch.Root>

// 							{isFile(file) && <p className="truncate">{file.name}</p>}
// 						</div>

// 						{isFile(file) && (
// 							<button type="button" onClick={handleRemoveImage(file)}>
// 								<IconBox
// 									icon="lucide:trash-2"
// 									className="size-[20px] text-red-500 active:scale-110"
// 								/>
// 							</button>
// 						)}
// 					</li>
// 				);
// 			}}
// 		/>
// 	);
// }
