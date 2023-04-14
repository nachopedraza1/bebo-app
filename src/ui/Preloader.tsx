import { CircularProgress, Grid } from "@mui/material"
import { useEffect, useState } from "react"

export const Preloader: React.FC = () => {

    const [fadeClass, setFadeClass] = useState('loading');

    useEffect(() => {
        setTimeout(() => {
            setFadeClass('loading loading-fade')
        }, 1500);
        return setFadeClass('loading')
    }, [])

    return (
        <Grid
            container
            className={fadeClass}
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress />
        </Grid>
    )
}