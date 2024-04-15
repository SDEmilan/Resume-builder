import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import { mainStyle } from '../Css/main';
import CircleIcon from '@mui/icons-material/Circle';

export default function Template1() {
    return (
        <>
            <Link to="/oneresume" style={{ textDecoration: "none" }}>
                <Paper elevation={9} sx={mainStyle.temp1}>
                    <Box sx={mainStyle.resumeBox1}>
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
                        <Typography sx={mainStyle.resumeBoxtext2}>Profesional Experience</Typography>
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
                        <Typography sx={mainStyle.Experience}>Education</Typography>
                    </Box>
                    <Box sx={mainStyle.resumeBox3}>
                        <Typography sx={mainStyle.education}>Masters in Human Resources September 2007 - May 2011</Typography>
                        <Typography sx={mainStyle.education1}>The University of Texas, Dallas</Typography>
                        <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} /> Academic Awardee of AY 2007-2008.</Typography>
                        <Typography sx={mainStyle.resumeBoxtext4}><CircleIcon sx={mainStyle.icon} /> Academic Awardee of AY 2007-2008.</Typography>
                    </Box>
                    <Box>
                        <Typography sx={mainStyle.skill}>Key Skill</Typography>
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
            </Link>
        </>
    )
}
