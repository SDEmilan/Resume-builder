
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { data } from "../taskbox/data"

export default function Navbar() {
    return (
        <>
            <Grid container sx={{ p: { lg: 2 }, display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: { lg: "row", xs: "row" }, width: { lg: "100%", xs: "100%" }, overflow: "auto", mt: { lg: 0, xs: 2, sm: 2, md: 2 } }}>
                {data.map((item) => {
                    // console.log(item)
                    const milan = Object.entries(item)
                    console.log(data[0], "88888888888888888888888")
                    console.log(milan[1], "nnnnnnnnnnnnnnnnnnnnnnnnnn")
                    return <>


                        <Grid item lg={1.7} sx={{ mt: { lg: 2 }, p: { lg: 2 } }}>
                            <Link to="/" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>{item.name}</Typography></Link>
                            <Link to="/all" style={{ textDecoration: "none" }}> <Typography sx={{ color: "rgb(233,150,95)", fontSize: { sm: 20, md: 20, lg: 20, xs: 17, fontWeight: 700 }, "&:hover": { borderBottom: "2px solid rgb(233,150,95)" } }}>{item.name}</Typography></Link>

                        </Grid>
                    </>
                })}
            </Grid >
        </>
    )
}
