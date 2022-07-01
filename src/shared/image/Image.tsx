import * as React from "react";
import NoImage from "../../../public/assets/image-unavailable.jpeg";

type Props = {
    imageUrl: string;
    className?: string;
    alt: string;
};

export const Image = ({ imageUrl, className, alt }: Props): JSX.Element => {
    const handleImageError = (
        e: React.SyntheticEvent<HTMLImageElement, Event>
    ): void => {
        e.currentTarget.src = NoImage;
    };

    return (
        <img
            src={imageUrl}
            onError={handleImageError}
            className={className}
            alt={alt}
        />
    );
};
