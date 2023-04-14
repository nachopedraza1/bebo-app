import { TransitionPage } from '../Layout/TransitionPage';
import { LatestDesigns } from '../components';
import { Grid } from '@mui/material';

export const HomePage: React.FC = () => {

    return (
        <TransitionPage>
            <Grid container>
                <LatestDesigns />
            </Grid >
        </TransitionPage>
    )
}
