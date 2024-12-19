import { cnMerge } from "@/lib/utils/cn";
import { toArray } from "@zayne-labs/toolkit/core";
import { isFile, isString } from "@zayne-labs/toolkit/type-helpers";
import { DropZone, type DropZoneProps } from "../ui/drop-zone";
import { getElementList } from "./For";
import { IconBox } from "./IconBox";
import { Switch } from "./Switch";

type FileOrNull = File | null;

type DropZoneInputProps = {
	onChange: (file: FileOrNull | FileOrNull[]) => void;
	value: FileOrNull | FileOrNull[];
};

export function DropZoneInput(props: DropZoneInputProps) {
	const { onChange, value } = props;

	const existingFiles = toArray(value).filter(Boolean);

	const handleFileUpload: DropZoneProps["onUpload"] = ({ acceptedFiles }) => {
		const newFileState = [...existingFiles, ...acceptedFiles];

		onChange(newFileState.at(-1) as File);
	};

	return (
		<DropZone
			onUpload={handleFileUpload}
			classNames={{
				base: `w-full items-center gap-2 rounded-[8px] border-[3px] border-dashed border-gray-600 px-4
				py-[60px]`,
			}}
			allowedFileTypes={["text/csv"]}
			validationSettings={{ maxFileSize: 6 }}
		>
			;
			<span
				className="block shrink-0 md:size-10"
				aria-flowto={String.raw`<div
					class="w-full items-center gap-2 rounded-[8px] border-[3px] border-dashed border-gray-600 px-4 py-[60px]"
				>
					<div>flow</div>
				</div>`}
			>
				<IconBox icon="solar:file-send-outline" className="size-full" />
			</span>
			<p>
				Drag and drop or{" "}
				<button type="button" className="text-school-blue">
					Browse
				</button>{" "}
				your file
			</p>
		</DropZone>
	);
}

type ImagePreviewProps = {
	classNames?: {
		image?: string;
		listContainer?: string;
		listItem?: string;
	};
	onChange: (file: File | File[]) => void;
	value: File | File[];
};

export function DropZoneImagePreview(props: ImagePreviewProps) {
	const { classNames, onChange, value } = props;

	const newFilesArray = toArray(value).filter(Boolean);

	const [ImagePreviewList] = getElementList();

	if (newFilesArray.length === 0) return;

	const handleRemoveImage = (file: File) => () => {
		const updatedFileState = newFilesArray.filter((item) => {
			if (isFile(item) && isFile(file)) {
				return item.name !== file.name;
			}

			return false;
		});

		onChange(updatedFileState);
	};

	return (
		<ImagePreviewList
			className={cnMerge(
				`relative mt-[13px] max-h-[140px] divide-y divide-gray-600 overflow-y-auto overscroll-y-contain
				rounded-md border border-gray-600`,
				classNames?.listContainer
			)}
			each={newFilesArray}
			render={(file) => {
				return (
					<li
						key={isFile(file) ? file.name : file}
						className={cnMerge(
							"flex items-center justify-between p-2 text-xs",
							classNames?.listItem
						)}
					>
						<div className="flex min-h-[66px] min-w-0 items-center gap-4">
							<Switch>
								<Switch.Match
									when={(isFile(file) && file.type.startsWith("image")) || isString(file)}
								>
									<img
										src={isFile(file) ? URL.createObjectURL(file) : file}
										className={cnMerge(
											"size-[50px] shrink-0 rounded-md object-cover",
											classNames?.image
										)}
										width={50}
										height={50}
										fetchPriority="high"
										alt="image-preview-thumbnail"
									/>
								</Switch.Match>

								<Switch.Match when={isFile(file) && file.type.includes("pdf")}>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:document-medicine-linear" className="size-full" />
									</span>
								</Switch.Match>

								<Switch.Default>
									<span className="block size-[40px] shrink-0">
										<IconBox icon="solar:file-outline" className="size-full" />
									</span>
								</Switch.Default>
							</Switch>

							{isFile(file) && <p className="truncate">{file.name}</p>}
						</div>

						{isFile(file) && (
							<button type="button" onClick={handleRemoveImage(file)}>
								<IconBox
									icon="lucide:trash-2"
									className="size-[20px] text-red-500 active:scale-110"
								/>
							</button>
						)}
					</li>
				);
			}}
		/>
	);
}
