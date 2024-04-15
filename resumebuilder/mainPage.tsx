import { Box, Grid, LinearProgress, Paper, Typography } from '@mui/material'
import React from 'react'
import { mainStyle } from '../Css/main';
import CircleIcon from '@mui/icons-material/Circle';
import Header from './headerPage';
import { Link } from 'react-router-dom';
import Template1 from './template1';
import Template2 from './template2';
export default function MainPage() {
    return (
        <>
            <Header />
            <Box sx={mainStyle.mainBox}>
                <Typography sx={mainStyle.text1}>Select a Template</Typography>
                <Typography sx={mainStyle.text2}>Select a color and a template to get started.</Typography>
            </Box>
            <Box sx={mainStyle.mainBox1}>
                <Grid container>
                    <Grid item lg={5}>
                        <Template1 />
                    </Grid>
                    <Grid item lg={6} >
                        <Template2 />
                    </Grid>
                </Grid>
            </Box>


        </>
    )
}
