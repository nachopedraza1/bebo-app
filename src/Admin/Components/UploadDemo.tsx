import { YouTube } from "@mui/icons-material"
import { InputAdornment, TextField } from "@mui/material"
import { ChangeEvent } from "react"

interface UploadDemo {
    urlVideo: string,
    onInputchange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadDemo: React.FC<UploadDemo> = ({ urlVideo, onInputchange }) => {
    return (
        <TextField
            required
            fullWidth
            variant='outlined'
            name='urlVideo'
            label="Youtube URL"
            type='text'
            value={urlVideo}
            onChange={onInputchange}
            placeholder='URL del video'
            inputProps={{
                minLength: 42,
                maxLength: 43,
            }}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        < YouTube />
                    </InputAdornment>
                )
            }}
        />
    )
}
