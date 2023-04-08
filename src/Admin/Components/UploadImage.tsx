import { useRef, ChangeEvent } from 'react';

import { PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/material"

interface Upload {
    onSelectImage: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadImage: React.FC<Upload> = ({ onSelectImage }) => {

    const fileInput: any = useRef();

    return (
        <>
            <Button
                fullWidth
                variant='contained'
                onClick={() => fileInput.current.click()}
                endIcon={<PhotoCamera />}
                sx={{ padding: "10px" }}
            >
                Subir imagen
            </Button>
            <input ref={fileInput} hidden accept="image/*" type="file" onChange={onSelectImage} />
        </>
    )
}
