import { useState, useEffect } from "react";
import { Grid, Typography, Button, Divider, SelectChangeEvent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FilterList } from "@mui/icons-material"


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
    { id: 1, category: "All" },
    { id: 2, category: "Logos" },
    { id: 3, category: "Templates" },
    { id: 4, category: "Launchers" },
    { id: 5, category: "Flyers" },
    { id: 6, category: "Maps" },
    { id: 7, category: "Selects" },
    { id: 8, category: "Free" },
];

interface Filter {
    onFilter: (categoryFilter: string) => void;
    orderBy: (order: string) => void;
}

export const FilterBar: React.FC<Filter> = ({ onFilter, orderBy }) => {

    const [orderValue, setOrderValue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setOrderValue(event.target.value);
        orderBy(event.target.value);
    };


    return (
        <Grid container className="filter-bar" justifyContent={{ xs: "center", md: "space-between" }} alignItems="center">
            <Grid item md={2} >
                <Grid container alignItems="center" gap={2}>
                    <FilterList sx={{ fontSize: "30px" }} />
                    <Typography variant="h4"> FILTER </Typography>
                    <Divider
                        flexItem
                        orientation="vertical"
                        sx={{
                            bgcolor: "#0000003a",
                            maxHeight: "25px",
                            display: { xs: "none", md: "flex" },
                            mt: "2px",
                        }} />
                </Grid>
            </Grid>
            <Grid item >
                <Grid container justifyContent="center" gap={1}>
                    {buttons.map(({ id, category }) => (
                        <Button key={id} sx={buttonStyles} onClick={() => onFilter(category)}>
                            {category}
                        </Button>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={2} textAlign="end" display={{ xs: "none", md: "block" }}>
                <FormControl sx={{ maxWidth: 120 }} fullWidth size="small">
                    <InputLabel sx={labelStyle}>Order by</InputLabel>
                    <Select
                        sx={selectStyle}
                        variant="outlined"
                        value={orderValue}
                        label="Order by"
                        onChange={handleChange}
                    >
                        <MenuItem value="asc">Higher price</MenuItem>
                        <MenuItem value="des">Lowest price</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    )
}
