import { useState } from "react";
import { YoutubeEmbed } from "./YoutubeEmbed";
import { Backdrop, Box, Button, Divider, Fade, Modal, Typography } from "@mui/material"
import { Visibility } from "@mui/icons-material"


const ButtonStyle = {
    border: "2px solid #dfdfdf",
    color: "#8c8c8c"
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "min-content",
};

export const ViewDemo: React.FC<{ urlVideo: string }> = ({ urlVideo }) => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Divider />
            <Button
                fullWidth
                sx={ButtonStyle}
                onClick={handleOpen}
                startIcon={<Visibility />}
            >
                view demo
            </Button>
            <Divider />
            <Typography fontSize={13}>
                Wonderful gaming design template for Aion server website made in cold purple and blue color theme with many cool dynamic effects and detalized ui elements. Homepage have many information blocks and module design for viewing all info about your server
            </Typography>

            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <YoutubeEmbed urlVideo={urlVideo} />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}
