import { useState } from 'react';
import { styled } from '@mui/system';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';

export const SelectLang: React.FC = () => {
    const [lang, setLang] = useState('en');

    const handleChange = (event: SelectChangeEvent<any>) => {
        setLang(event.target.value);
    };


    const CustomSelect = styled(Select)({
        '.MuiSelect-outlined': {
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: 5,
            color: "white",
            boxShadow: "none",
        },
        ".MuiOutlinedInput-notchedOutline": { border: 0 },
        "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
        {
            border: 0,
        },
        "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
            border: 0,
        },
    });

    return (
        <CustomSelect
            variant='outlined'
            value={lang}
            onChange={handleChange}
        >
            <MenuItem value="sp" disabled>
                <img src="/assets/es.gif" style={{ marginRight: "7px" }} />
                ES
            </MenuItem>
            <MenuItem value="en">
                <img src="/assets/us.gif" style={{ marginRight: "7px" }} />
                EN
            </MenuItem>
        </CustomSelect>
    );
}
