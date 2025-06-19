"use client";

import { cnMerge } from "@/lib/utils/cn";
import { createCustomContext, useCallbackRef } from "@zayne-labs/toolkit-react";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { useEffect, useMemo, useState } from "react";
import { IconBox } from "../common";
import { type ShadcnButtonProps, shadcnButtonVariants } from "./constants";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
	options?: CarouselOptions;
	orientation?: "horizontal" | "vertical";
	plugins?: CarouselPlugin;
	setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = CarouselProps & {
	api: ReturnType<typeof useEmblaCarousel>[1];
	canScrollNext: boolean;
	canScrollPrev: boolean;
	carouselRef: ReturnType<typeof useEmblaCarousel>[0];
	scrollNext: () => void;
	scrollPrev: () => void;
};

const [CarouselContextProvider, useCarouselContext] = createCustomContext<CarouselContextProps>({
	hookName: "useCarouselContext",
	name: "CarouselContext",
	providerName: "CarouselRoot",
});

function CarouselRoot(props: CarouselProps & InferProps<"div">) {
	const {
		children,
		className,
		options,
		orientation = "horizontal",
		plugins,
		setApi,
		...restOfProps
	} = props;

	const [carouselRef, carouselApi] = useEmblaCarousel(
		{ ...options, axis: orientation === "horizontal" ? "x" : "y" },
		plugins
	);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const onSelect = useCallbackRef((api: CarouselApi) => {
		if (!api) return;

		// eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
		setCanScrollPrev(api.canScrollPrev());
		// eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
		setCanScrollNext(api.canScrollNext());
	});

	const scrollPrev = useCallbackRef(() => carouselApi?.scrollPrev());

	const scrollNext = useCallbackRef(() => carouselApi?.scrollNext());

	const handleKeyDown = useCallbackRef((event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		}

		if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	});

	useEffect(() => {
		if (!carouselApi || !setApi) return;

		setApi(carouselApi);
	}, [carouselApi, setApi]);

	useEffect(() => {
		if (!carouselApi) return;

		onSelect(carouselApi);

		carouselApi.on("reInit", onSelect);
		carouselApi.on("select", onSelect);

		return () => {
			carouselApi.off("select", onSelect);
		};
	}, [carouselApi, onSelect]);

	const contextValue = useMemo(
		() => ({
			api: carouselApi,
			canScrollNext,
			canScrollPrev,
			carouselRef,
			options,
			orientation,
			scrollNext,
			scrollPrev,
		}),
		[
			carouselApi,
			canScrollNext,
			canScrollPrev,
			carouselRef,
			options,
			orientation,
			scrollNext,
			scrollPrev,
		]
	);

	return (
		<CarouselContextProvider value={contextValue}>
			<div
				onKeyDownCapture={handleKeyDown}
				className={cnMerge("relative", className)}
				role="region"
				aria-roledescription="carousel"
				data-slot="carousel-root"
				{...restOfProps}
			>
				{children}
			</div>
		</CarouselContextProvider>
	);
}

function CarouselContent(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	const { carouselRef, orientation } = useCarouselContext();

	return (
		<div ref={carouselRef} data-slot="carousel-content" className="overflow-hidden">
			<div
				className={cnMerge(
					"flex",
					orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
					className
				)}
				{...restOfProps}
			/>
		</div>
	);
}

function CarouselItem(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	const { orientation } = useCarouselContext();

	return (
		<div
			role="group"
			aria-roledescription="slide"
			data-slot="carousel-item"
			className={cnMerge(
				"min-w-0 shrink-0 grow-0 basis-full",
				orientation === "horizontal" ? "pl-4" : "pt-4",
				className
			)}
			{...restOfProps}
		/>
	);
}

function CarouselPrevious(props: ShadcnButtonProps) {
	const { className, size = "icon", variant = "outline", ...restOfProps } = props;

	const { canScrollPrev, orientation, scrollPrev } = useCarouselContext();

	return (
		<button
			type="button"
			data-slot="carousel-previous"
			className={cnMerge(
				"absolute size-8 rounded-full",
				orientation === "horizontal" ?
					"top-1/2 -left-12 -translate-y-1/2"
				:	"-top-12 left-1/2 -translate-x-1/2 rotate-90",
				shadcnButtonVariants({ size, variant }),
				className
			)}
			disabled={!canScrollPrev}
			onClick={scrollPrev}
			{...restOfProps}
		>
			<IconBox icon="lucide:arrow-left" />
			<span className="sr-only">Previous slide</span>
		</button>
	);
}

function CarouselNext(props: ShadcnButtonProps) {
	const { className, size = "icon", variant = "outline", ...restOfProps } = props;

	const { canScrollNext, orientation, scrollNext } = useCarouselContext();

	return (
		<button
			type="button"
			data-slot="carousel-next"
			className={cnMerge(
				"absolute size-8 rounded-full",
				orientation === "horizontal" ?
					"top-1/2 -right-12 -translate-y-1/2"
				:	"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
				shadcnButtonVariants({ size, variant }),
				className
			)}
			disabled={!canScrollNext}
			onClick={scrollNext}
			{...restOfProps}
		>
			<IconBox icon="lucide:arrow-right" />
			<span className="sr-only">Next slide</span>
		</button>
	);
}

export const Root = CarouselRoot;
export const Content = CarouselContent;
export const Item = CarouselItem;
export const Previous = CarouselPrevious;
export const Next = CarouselNext;

export { type CarouselApi };
