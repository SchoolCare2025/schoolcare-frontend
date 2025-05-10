import { Image as ImagePrimitive } from "@unpic/react";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function Image(props: InferProps<typeof ImagePrimitive>) {
	return <ImagePrimitive {...props} />;
}

export { Image };
