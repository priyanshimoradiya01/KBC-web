import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import img1 from "../../assets/images/aboutImg/yellowImg.png"
import img2 from "../../assets/images/aboutImg/fImg1.png"
import img3 from "../../assets/images/Home/project1.jfif"


function AboutSection1() {
    return (
        <>
            <Box>
                <Container maxWidth={"lg"}>
                    <Box>
                        <Grid item container xs={12} spacing={3} sx={{ margin: "55px 0 90px 0" }}>

                            <Grid item xs={12} lg={6} md={6} sm={12}>
                                <Box sx={{margin:{xs:"0 25px 0 0"}}}>
                                    <Box>
                                        <Typography sx={{ fontSize: "23px", fontWeight: "600" }}>About Dwarkesh Group</Typography>
                                        <Typography sx={{ fontSize: "20px", fontWeight: "600", color: "#caa964" }}>Defining Luxury Living</Typography>
                                    </Box>
                                    <Box sx={{ margin: "10px 0 0 0" }}>
                                        <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "20px" }}>Everyone has a dream world of their own that makes them happy. For some, it’s a home sweet home, where they can live their dreams. For others, it’s commercial space that fulfils their business aspirations. At Dwarkesh Group, we transform dreams into reality by constructing new landmarks in residential, commercial, leisure, industrial, and logistics categories.</Typography>
                                        <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "20px", margin: "20px 0" }}>Within 10 years of starting operations, we have transformed Gujarat’s skyline and have become one of the most trusted builders in Gujarat and Maharashtra. In years to come, the group is poised to enter states such as Haryana, Karnataka, Delhi, Punjab, Madhya Pradesh, and Rajasthan. Dwarkesh Group is therefore committed to spreading its wings of happiness nationally. At Dwarkesh Group, our commitment extends beyond borders as we strive to spread the wings of happiness nationwide. Join us on the journey to transform your dreams into a vibrant reality. Dwarkesh Group stands firm in its dedication and unwavering commitment to quality, earning a plethora of prestigious accolades. Notable among these achievements is the CREDAI Award in 2012 for the 'Best Residential Apartment Lifestyle Non Metro' category and the CNBC AWAAZ Real Estate Award in 2013 for the 'Best Fully Completed Luxury Residential Project from Surat City.'</Typography>
                                        <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "20px", display: { lg: "block", md: "none", sm: "block", xs: "block" } }}>Expanding on our list of honours, the group has reached significant milestones with awards from Brands Academy (2014–15). These include titles such as the 'Fastest Growing Real Estate Developer of the Year' (Gujarat) and, for our project Dwarkesh Group the distinction of 'Real Estate Developer of the Year' (Luxury Housing). In the commercial sector, Dwarkesh Group was recognised as the 'Best Commercial Project of the Year.' Our footprint in the industry speaks volumes about the excellence and impact that define Dwarkesh Group.</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={12} lg={6} md={6} sm={12}>
                                <Box sx={{ justifyContent: "end", display: "flex", alignItems: "end", textAlign: "center",margin:{xs:"0 40px 0 0"} }}>
                                    <Box sx={{ width: "90%", position: "relative" }}>
                                        <img src={img1} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                                        <Box sx={{ position: "absolute", top: "1%", right: "3%", width: "107%" }}><img src={img2} alt="" style={{ maxWidth: "100%", height: "auto" }} /></Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AboutSection1;