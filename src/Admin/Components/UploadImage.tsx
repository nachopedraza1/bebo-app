import { ChangeEvent, useEffect, useRef } from "react";

import { PhotoCamera } from "@mui/icons-material";
import { Button } from "@mui/material"

export const UploadImage = ({ selectedImg, setPreviewImg, setUploadImg, setSelectedImg }: any) => {

    const fileInput: any = useRef();

    useEffect(() => {
        if (!selectedImg) return;
        const previewImgUrl = URL.createObjectURL(selectedImg)
        setPreviewImg(previewImgUrl)
        return () => URL.revokeObjectURL(previewImgUrl)
    }, [selectedImg])

    const onSelectFile = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return
        setSelectedImg(event.target.files[0])
        setUploadImg(event.target.files[0])
    }

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
            <input ref={fileInput} hidden accept="image/*" type="file" onChange={onSelectFile} />
        </>
    )
}
