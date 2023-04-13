import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';


export const Image: React.FC<{ imgUrl: string | undefined }> = ({ imgUrl }) => {

    return (
        <LazyLoadImage
            alt=""
            height="auto"
            effect="blur"
            src={imgUrl}
            width="100%"
            style={{ maxWidth: "700px", borderRadius: "5px" }}
        />
    )
}
