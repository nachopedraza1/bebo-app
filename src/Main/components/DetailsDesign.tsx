import { Grid, Typography } from "@mui/material"
import { Post } from "../../Interfaces/interfaces";

export const DetailsDesign: React.FC<Post> = ({ category, date, price }) => {

    const table = [
        { name: "Game", value: "Mu Online" },
        { name: "Category", value: category },
        { name: "Date", value: date },
        { name: "Format", value: "PSD" },
        { name: "Price", value: `$ ${price}.00 USD` },
    ];

    return (
        <Grid container>
            {table.map(({ name, value }) => (
                <Grid container key={name}>
                    <Grid item xs={6} paddingBottom="8px">
                        <Typography variant="h6" fontSize={14}>{name}:</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" fontSize={14} fontWeight={600}> {value}</Typography>
                    </Grid>
                </Grid >
            ))}
        </Grid>
    )
}
