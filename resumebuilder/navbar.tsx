import React from 'react';
import { Grid, Typography } from '@mui/material';
import Button from '@mui/material';
import { Pages } from './task';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <Grid container sx={{ p: { lg: 2 }, display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: { lg: "row", xs: "row" }, width: { lg: "100%", xs: "100%" } }}>
                <Grid item lg={1.7} xs={12} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>Course Highlights</Typography></Link>
                </Grid>
                <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/Insta" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>Instructor Details</Typography></Link>
                </Grid>
                <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/Faq" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>FAQ'S Question</Typography></Link>
                </Grid>
                <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/Skill" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>Skill Information</Typography></Link>
                </Grid>
                <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/Rat" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>Rating Details</Typography></Link>
                </Grid>
                <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                    <Link to="/Rele" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>Relevent Jobs</Typography></Link>
                </Grid>
            </Grid >


        </>
    )
}