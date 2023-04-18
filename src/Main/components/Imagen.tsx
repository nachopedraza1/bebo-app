import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Image: React.FC<{ imgUrl: string | undefined, maxWidth?: string }> = ({ imgUrl, maxWidth = "700px" }) => {

    return (
        <LazyLoadImage
            alt=""
            height="auto"
            effect="blur"
            src={imgUrl}
            width="100%"
            style={{ maxWidth: maxWidth, borderRadius: "5px" }}
        />
    )
}
