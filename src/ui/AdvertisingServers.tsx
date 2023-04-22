import { Grid } from "@mui/material"
import { motion } from 'framer-motion';
import { Image } from "../Main/components";

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
                    <Image imgUrl="/assets/slotfreesmall.gif" height="100%" borderRadius="0px" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Image imgUrl="/assets/slotfreesmall.gif" height="100%" borderRadius="0px" />
                </Grid>
                <Grid item xs={6} md={3}>
                    <Image imgUrl="/assets/slotfreesmall.gif" height="100%" borderRadius="0px" />

                </Grid>
                <Grid item xs={6} md={3}>
                    <Image imgUrl="/assets/slotfreesmall.gif" height="100%" borderRadius="0px" />
                </Grid>
            </Grid>

            <Grid container justifyContent="center">
                <Grid item xs={6} md={4}>
                    <Image imgUrl="/assets/slotfreebig.gif" height="100%" borderRadius="0px" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Image imgUrl="/assets/slotfreebig.gif" height="100%" borderRadius="0px" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <Image imgUrl="/assets/slotfreebig.gif" height="100%" borderRadius="0px" />
                </Grid>
            </Grid>
        </motion.div>
    )
}
