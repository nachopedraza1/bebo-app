import { Grid } from "@mui/material"
import { motion } from 'framer-motion';

export const AdvertisingServers: React.FC = () => {

    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.40 }}
        >
            <Grid container mt={{ xs: 1.2, sm: 0.9, md: 0 }}>
                <Grid item xs={6} md={3}>
                    <img src="/assets/instinto.gif" width="100%" height="100%" alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src="/assets/osma.gif" width="100%" height="100%" alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src="/assets/mugp.gif" width="100%" height="100%" alt="" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <img src="/assets/magdalenax.gif" width="100%" height="100%" alt="" />
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={6} md={4}>
                    <img src="/assets/3rd1.gif" width="100%" height="100%" alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src="/assets/3rd3.gif" width="100%" height="100%" alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img src="/assets/3rd2.gif" width="100%" height="100%" alt="" />
                </Grid>
            </Grid>
        </motion.div>
    )
}
