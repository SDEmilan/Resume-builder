import { Box, Paper } from '@mui/material'
import React from 'react';
import { headerStyle } from '../Css/header';
import img from "../Assets/Screenshot from 2024-01-20 12-08-24.png"


function Header() {
    return (
        <>
            <Box>
                <Paper elevation={7} sx={headerStyle.paperHeight}>
                    <Box component={"img"} src={img} sx={headerStyle.img}></Box>
                </Paper>
            </Box>
        </>
    )
}
export default Header