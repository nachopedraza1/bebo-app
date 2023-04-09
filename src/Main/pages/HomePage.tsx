import { Grid } from '@mui/material';
import { LatestDesigns } from '../components/LatestDesigns';


export const HomePage: React.FC = () => {

    return (
        <Grid container>
            <Grid item xs={12}>
                <LatestDesigns />
            </Grid>
        </Grid>
    )
}
