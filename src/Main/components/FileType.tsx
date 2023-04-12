import { Link } from "react-router-dom"
import { Divider, Grid, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces"

export const FileType: React.FC<Post> = ({ price }) => {
    return (
        <>
            <Divider />
            <Grid container className="faq-box">
                <Grid item xs={2}>
                    <img src="/assets/warning_icon.png" width="70%" alt="" />
                </Grid>
                <Grid item xs={10}>
                    Please read about
                    <Link to="/faq" style={{ margin: "0px 5px", color: "#f1484c" }}>
                        File Types
                    </Link>
                    before choosing and buying items.
                </Grid>
            </Grid>

            <Typography variant="h5" fontSize={16}> Basic Package: </Typography>

            <Grid container className="psd-box">
                <Grid item xs={9} display="flex" alignItems="center">
                    <img src="/assets/psd.png" width={22} />
                    <Typography variant="h5" fontSize={15} ml={1}> Editable PSD </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5" fontSize={24} fontWeight={400}> ${price}.00 </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Once the item is purchased you will receive the design in psd format. </Typography>
                </Grid>
            </Grid>
            <Divider />
        </>
    )
}
