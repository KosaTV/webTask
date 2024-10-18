import {isValidElement, useState} from "react";
import {DefaultImagePlaceholder} from "./styles";

const Image = ({src, alt, className, width = "auto", height = "auto", fill, onError, onLoad, fallbackContent, placeholderContent, lazyLoad, styles, imgAttr}) => {
	const [renderFallback, setRenderFallback] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	const handleImageError = () => {
		onError?.();
		setRenderFallback(true);
	};

	const handleImageLoad = () => {
		setImageLoaded(true);
		onLoad?.();
	};

	const getInitialStyles = () => ({
		opacity: imageLoaded || renderFallback ? 1 : 0
	});

	const getFillStyles = () => ({
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center"
	});

	const getAdditionalStyles = () => ({
		...(imageLoaded || renderFallback ? styles : {}),
		...(fill ? getFillStyles() : {})
	});

	const renderImagePlaceholder = () => {
		if (isValidElement(placeholderContent)) {
			return placeholderContent;
		} else if (placeholderContent) {
			return <DefaultImagePlaceholder fill={fill} width={width} height={height} />;
		}
	};

	return (
		<>
			{!renderFallback && !imageLoaded && renderImagePlaceholder()}
			<img
				style={{...getInitialStyles(), ...getAdditionalStyles()}}
				loading={lazyLoad ? "lazy" : "eager"}
				width={width}
				height={height}
				src={src}
				alt={alt}
				onError={handleImageError}
				onLoad={handleImageLoad}
				{...imgAttr}
				className={className}
			/>
			{renderFallback && fallbackContent}
		</>
	);
};

export default Image;
