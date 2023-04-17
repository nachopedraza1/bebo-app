import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material"

interface Select {
    category: string,
    onInputchange: (e: SelectChangeEvent) => void;
}

const items = [
    { name: "Logos", value: "Logos" },
    { name: "Maps", value: "Maps" },
    { name: "Flyers", value: "Flyers" },
    { name: "Templates", value: "Templates" },
    { name: "Launchers", value: "Launchers" },
    { name: "Selects", value: "Selects" },
    { name: "Free", value: "Free" },
]

export const SelectCategory: React.FC<Select> = ({ category, onInputchange }) => {

    return (
        <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select
                required
                name='category'
                value={category}
                label="Categoria"
                onChange={onInputchange}
            >
                {items.map(({ name, value }) => (
                    <MenuItem key={name} value={value}> {name} </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
