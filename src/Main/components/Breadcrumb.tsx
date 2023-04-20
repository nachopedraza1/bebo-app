import { Link as RouterLink } from 'react-router-dom';

import { Breadcrumbs, Grid, Link, Stack, Typography } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

import { Post } from '../../Interfaces/interfaces';

export const Breadcrumb: React.FC<Post> = ({ title, category }) => {
    const breadcrumbs = [
        <Link component={RouterLink} to="/designs" underline="hover" key="1" color="inherit">
            Designs
        </Link>,
        <Typography
            key="2"
            color="inherit"
        >
            {category}
        </Typography>,
        <Typography key="3" color="text.primary" textTransform="capitalize" noWrap>
            {title}
        </Typography>,
    ];

    return (
        <Grid container alignItems="center" color="#8c8c8c" p="50px 0px">
            <Stack spacing={2}>
                <Breadcrumbs
                    separator={<NavigateNext fontSize="small" sx={{ mx: { xs: 0, md: 2, } }} />}
                >
                    {breadcrumbs}
                </Breadcrumbs>
            </Stack>
        </Grid>
    );
}
