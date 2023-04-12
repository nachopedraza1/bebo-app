import styled from "@emotion/styled";
import { FilterList, WhatsApp } from "@mui/icons-material"
import { Grid, Typography, Button, Divider, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from "react";


const CustomButton = styled(Button)({
    color: 'black',
    backgroundColor: '#0000003a',
    padding: "15px"
});

const CustomSelect = styled(Select)({
    '.MuiSelect-outlined': {
        backgroundColor: "#0000003a",
        color: "white",
        padding: 3.5,
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
    {
        border: "1px solid #0000003a",
    },
});

const labelStyle = {
    fontFamily: "Aldrich ",
    textTransform: "uppercase",
    fontSize: 13,
    color: "black",
}

export const FilterBar: React.FC = () => {

    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Grid container className="filter-bar" justifyContent="space-between" alignItems="center">
            <Grid item xs={2}>
                <Grid container alignItems="center" gap={2}>
                    <FilterList sx={{ fontSize: "30px" }} />
                    <Typography variant="h4"> FILTER </Typography>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: "#0000003a", maxHeight: "25px", mt: "2px" }} />
                </Grid>
            </Grid>
            <Grid item >
                <Grid container justifyContent="center" gap={1}>
                    <CustomButton>
                        All
                    </CustomButton>
                    <CustomButton>
                        Logos
                    </CustomButton>
                    <CustomButton>
                        Templates
                    </CustomButton>
                    <CustomButton>
                        Launchers
                    </CustomButton>
                    <CustomButton>
                        Templates
                    </CustomButton>
                    <CustomButton>
                        Flyers
                    </CustomButton>
                    <CustomButton>
                        Maps
                    </CustomButton>
                    <CustomButton>
                        Selects
                    </CustomButton>
                </Grid>
            </Grid>
            <Grid item xs={2} textAlign="end">
                <FormControl sx={{ maxWidth: 120 }} fullWidth size="small">
                    <InputLabel sx={labelStyle}>Order by</InputLabel>
                    <CustomSelect
                        variant="outlined"
                        value={age}
                        label="Order by"
                        onChange={handleChange}

                    >
                        <MenuItem value={10} >Higher price</MenuItem>
                        <MenuItem value={20}>Lowest price</MenuItem>
                        <MenuItem value={20}>Most recent</MenuItem>
                    </CustomSelect>
                </FormControl>
            </Grid>
        </Grid>
    )
}
