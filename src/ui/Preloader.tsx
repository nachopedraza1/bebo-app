import { useEffect, useState } from "react"
import { Grid } from "@mui/material"

export const Preloader: React.FC = () => {

    const [fadeClass, setFadeClass] = useState('loading');

    useEffect(() => {
        setTimeout(() => {
            setFadeClass('loading loading-fade')
        }, 3500);
        return setFadeClass('loading')
    }, [])

    return (
        <Grid
            container
            className={fadeClass}
            justifyContent="center"
            alignItems="center"
            bgcolor="#0f152a"
        >
            <img src="/assets/preloader.gif" width="150px" alt="" />
        </Grid>
    )
}