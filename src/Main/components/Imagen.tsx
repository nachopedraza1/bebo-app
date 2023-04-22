import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


interface LazyImage {
    imgUrl?: string,
    maxWidth?: string,
    borderRadius?: string,
    height?: string,
}

export const Image: React.FC<LazyImage> = ({ imgUrl, maxWidth = "700px", borderRadius = "5px", height = "auto" }) => {

    return (
        <LazyLoadImage
            alt=""
            height={height}
            effect="blur"
            src={imgUrl}
            width="100%"
            style={{ maxWidth: maxWidth, borderRadius: borderRadius }}
        />
    )
}
