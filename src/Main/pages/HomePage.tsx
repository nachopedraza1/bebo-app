import { AdvertisingSlide, LatestDesigns } from '../components';
import { Container, Grid } from '@mui/material';

export const HomePage: React.FC = () => {

    return (
        <>
            <AdvertisingSlide />
            <Container>
                <LatestDesigns />
            </Container >
        </>
    )
}
