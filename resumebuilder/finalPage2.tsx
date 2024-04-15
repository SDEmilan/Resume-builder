import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react';
import { finalPage } from '../Css/final';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AddIcon from '@mui/icons-material/Add';
import Header from './headerPage';
import Template1 from './template1';
import Template2 from './template2';
import { mainStyle } from '../Css/main';
import CircleIcon from '@mui/icons-material/Circle';
export default function FinalPgae2() {

    return (
        <>
            <Header />
            <Box sx={finalPage.mainBox}>
                <Grid container spacing={2} sx={finalPage.grid}>
                    <Grid item lg={5.2} sx={finalPage.leftgrid}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Box component={Button} variant='outlined' sx={finalPage.leftsidebtn1}> <CalendarViewMonthIcon /> &nbsp;Templates</Box>
                            <Box component={Button} variant='contained' sx={finalPage.leftsidebtn2}>Next&nbsp;<ArrowRightAltIcon /></Box>
                        </Box>
                        <Box>
                            <Paper elevation={7} sx={finalPage.paper}>
                                <Box sx={{ display: "flex", mt: 1 }}>
                                    <Box sx={{ ml: 2 }}>
                                        <Typography sx={finalPage.personal}>Personal Details</Typography>
                                        <Typography sx={finalPage.personal1}>Get started with the basics: your name and contact information.</Typography>
                                    </Box>
                                    <Box>
                                        <Box component={Button} variant='outlined' sx={finalPage.leftsidebtn3}><TipsAndUpdatesIcon />&nbsp;Quick tips</Box>
                                    </Box>
                                </Box>
                                <Box>
                                    <Grid container sx={{ p: 2 }} rowGap={2}>
                                        <Grid item lg={5.5} sx={{ height: "55vh" }}>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Firsr Name</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Job Tittle</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Email address</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                                <Typography sx={{ fontSize: 12, width: 280 }}>By creating a resume, you agree to receive emails — unsubscribe anytime.</Typography>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>City</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>State</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>

                                        </Grid>

                                        <Grid item lg={5.5} sx={{ ml: 5.5 }}>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Last Name</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Phone</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Address</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 6.5 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Zip Code</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                            <Box sx={{ mt: 2 }}>
                                                <Typography sx={{ fontSize: 13, fontWeight: 600 }}>Country</Typography>
                                                <TextField variant='outlined' size='small' sx={{ width: 270 }}></TextField>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ display: "flex", ml: 1, mt: -2 }}>
                                        <AddIcon sx={{ color: "#2A64AD" }} />&nbsp; <Typography sx={{ color: "#2A64AD" }}> Add Social Link</Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item lg={5.2} sx={finalPage.rightgrid}>
                        <Box sx={{ mt: -2, ml: -15, width: 800 }}>
                            {/* <Template2 /> */}
                            <Paper elevation={9} sx={mainStyle.temp12}>
                                <Box sx={mainStyle.resumeBoxright}>
                                    <Typography sx={mainStyle.candidate}>Chris Candidate</Typography>
                                    <Typography sx={mainStyle.designation}>Human Resource Manager</Typography>
                                    <Typography sx={mainStyle.address}>4759 Sunnydale Lane, Plano, TX 75071 | (469) 385-2948 | email@youremail.com</Typography>
                                </Box>
                                <Box sx={mainStyle.resumeBox2}>
                                    <Typography sx={mainStyle.resumeBoxtext1}>
                                        Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography sx={mainStyle.profesional}>Profesional Experience</Typography>
                                </Box>
                                <Box sx={mainStyle.resumeBox3}>
                                    <Typography sx={mainStyle.resumeBoxtext3}>Jim's Widget Factory, Plano, TXJanuary 2016 - Present</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext3}>Human Resourse Manger</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} />  Implement effective company policies to ensure that all practices comply with labor and employment regulations .</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} />  Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment.</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} />  Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies.</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} />  Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met.</Typography>

                                </Box>
                                <Box>
                                    <Typography sx={mainStyle.edu}>Education</Typography>
                                </Box>
                                <Box sx={mainStyle.resumeBox3}>
                                    <Typography sx={mainStyle.education}>Masters in Human Resources September 2007 - May 2011</Typography>
                                    <Typography sx={mainStyle.education1}>The University of Texas, Dallas</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} /> Academic Awardee of AY 2007-2008.</Typography>
                                    <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} /> Academic Awardee of AY 2007-2008.</Typography>
                                </Box>
                                <Box>
                                    <Typography sx={mainStyle.key}>Key Skill</Typography>
                                </Box>
                                <Box sx={mainStyle.resumeBox5}>
                                    <Box sx={{ display: "flex", ml: 3 }}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography>Detail Obtained</Typography>
                                            <Box component={"progress"} sx={{ mt: 0.5, ml: 1 }} value="87" max="100"></Box>
                                        </Box>
                                        <Box sx={{ display: "flex", ml: 2 }}>
                                            <Typography>React Js</Typography>
                                            <Box component={"progress"} sx={{ mt: 0.5, ml: 1 }} value="87" max="100"></Box>
                                        </Box>


                                    </Box>
                                    <Box sx={{ display: "flex", ml: 3, mt: 2 }}>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography>Material UI</Typography>
                                            <Box component={"progress"} sx={{ mt: 0.5, ml: 5 }} value="87" max="100"></Box>
                                        </Box>
                                        <Box sx={{ display: "flex", ml: 1.7 }}>
                                            <Typography>Typescript</Typography>
                                            <Box component={"progress"} sx={{ mt: 0.5, ml: 1 }} value="87" max="100"></Box>
                                        </Box>


                                    </Box>


                                </Box>


                            </Paper>
                        </Box>
                        <Box sx={{ ml: 38, mt: 2 }}>
                            <Button variant='contained' sx={{}}>Download</Button>
                        </Box>

                    </Grid>


                </Grid>



            </Box>
        </>
    )
}
