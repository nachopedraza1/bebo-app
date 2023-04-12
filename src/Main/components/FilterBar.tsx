import { FilterList } from "@mui/icons-material"
import { Grid, Typography, Button, Divider, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useState } from "react";


const buttonStyles = {
    color: 'black',
    backgroundColor: '#0000003a',
    padding: "15px"
};

const selectStyle = {
    '.MuiSelect-outlined': {
        backgroundColor: "#0000003a",
        color: "balck",
        padding: "4px 10px",
        fontFamily: "Aldrich",
        fontSize: 11,
        textAlign: "start",
        textTransform: "uppercase"
    },
    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: 0,
    },
};

const labelStyle = {
    fontFamily: "Aldrich ",
    textTransform: "uppercase",
    fontSize: 11,
    color: "black",
}

const buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "Logos" },
    { id: 3, name: "Templates" },
    { id: 4, name: "Launchers" },
    { id: 5, name: "Templates" },
    { id: 6, name: "Flyers" },
    { id: 7, name: "Maps" },
    { id: 8, name: "Selects" },
];

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
                    {buttons.map(({ id, name }) => (
                        <Button key={id} sx={buttonStyles}>
                            {name}
                        </Button>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={2} textAlign="end">
                <FormControl sx={{ maxWidth: 120 }} fullWidth size="small">
                    <InputLabel sx={labelStyle}>Order by</InputLabel>
                    <Select
                        sx={selectStyle}
                        variant="outlined"
                        value={age}
                        label="Order by"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Higher price</MenuItem>
                        <MenuItem value={20}>Lowest price</MenuItem>
                        <MenuItem value={20}>Most recent</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}
