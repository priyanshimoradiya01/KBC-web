import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import blogImg1 from "../../assets/images/blogImg/BlogImg1.png"

function NewsSection1() {
    return (
        <div>
            <Box>
                <Container maxWidth={"lg"}>
                    <Box sx={{margin:{lg:"70px 0 0 0",xs:"70px 43px 0 0"}}}>

                    <Box sx={{textAlign:"center",fontSize:"28px",fontWeight:"600","&:hover":{
          color:"#c29943",
          transition:".3s"
        }}}>News Highlights</Box>

                    <Grid container item xs={12}  spacing={4} sx={{ margin: "35px 0"}}>
                        <Grid item xs={12} sm={11} md={5} lg={4} >
                            <Box sx={{ backgroundImage: `url(${blogImg1})`, width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "0px 90px 0px 90px", boxShadow: "-20px -20px 2px #B57E0A", alignItems: "end", display: "flex", flex: "column", justifyContent: "end" }}>
                                <Button sx={{ bgcolor: "#B57E0A", color: "#fff", border: "2px solid #B57E0A", transition: "0.7s", borderRadius: "0px 20px 0px 20px", marginTop: "auto", "&:hover": { color: "#B57E0A" } }}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={11} md={6} lg={8}>
                            <Box>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", fontWeight: "500" }} >1 Jan, 2024</Typography>
                                <Typography sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "36px" }}>Rajhans Group Takes Flight Towards Digital Transformation with SAP HANA Module in Project UDAAN</Typography>
                                <Typography sx={{ fontSize: "14px", color: "#777777"}} >The Rajhans Group proudly announced a major leap forward in their business journey with the successful implementation of the SAP HANA module. Under the visionary project title "UDAAN," the group aims to soar to new heights of efficiency & innovation. SAP HANA, a cutting-edge in-memory database and application platform, will empower Rajhans Group to revolutionize their business processes, enhance real-time analytics, and pave the way for unprecedented growth opportunities. UDAAN represents the group's commitment to embracing digital solutions for a more agile and responsive organizational structure. "Digital transformation is not just a buzzword for us; it's a commitment to staying ahead in a rapidly evolving business landscape. With UDAAN, we are.....</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={12} md={12} spacing={4} sx={{ margin: "30px 0" }}>
                        <Grid item xs={12} sm={12} md={5} lg={4}>
                            <Box sx={{ backgroundImage: `url(${blogImg1})`, width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "0px 90px 0px 90px", boxShadow: "-20px -20px 2px #B57E0A", alignItems: "end", display: "flex", flex: "column", justifyContent: "end" }}>
                                <Button sx={{ bgcolor: "#B57E0A", color: "#fff", border: "2px solid #B57E0A", transition: "0.7s", borderRadius: "0px 20px 0px 20px", marginTop: "auto", "&:hover": { color: "#B57E0A" } }}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={8}>
                            <Box>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", fontWeight: "500", paddingBottom: "8px" }} mt={5}>2 Dec, 2014</Typography>
                                <Typography sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "36px" }}>CNBC Awards</Typography>
                                <Typography sx={{ fontSize: "15px", color: "#777777", margin: "" }} mt={1}>Rajhans (Desai-Jain) Group’s Luxurious residential project ‘Rajhans Maxima’ has been conferred with the prestigious CNBC Awaaz Real Estate Award 2013 in the Luxury Projects category from Surat city. Yet another testament to the group's commitment to deliver the highest standards to discerning customers.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={12} md={12} spacing={4} sx={{ margin: "30px 0" }}>
                        <Grid item xs={12} sm={12} md={5} lg={4}>
                            <Box sx={{ backgroundImage: `url(${blogImg1})`, width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "0px 90px 0px 90px", boxShadow: "-20px -20px 2px #B57E0A", alignItems: "end", display: "flex", flex: "column", justifyContent: "end" }}>
                                <Button sx={{ bgcolor: "#B57E0A", color: "#fff", border: "2px solid #B57E0A", transition: "0.7s", borderRadius: "0px 20px 0px 20px", marginTop: "auto", "&:hover": { color: "#B57E0A" } }}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={8}>
                            <Box>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", fontWeight: "500", paddingBottom: "8px" }} mt={5}>1 Jan, 2014</Typography>
                                <Typography sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "36px" }}>Spreading The Wings of Happiness with SAP</Typography>
                                <Typography sx={{ fontSize: "15px", color: "#777777", margin: "" }} mt={1}>Rajhans (Desai-Jain) Group has successfully introduced SAP with a view to keeping pace with global standards and similarly enabling efficient and reliable means of communication & data flow between many facets of the business. It is SAP, which will help us yield significant cost savings, increased productivity, and a lot more consistent operations.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} lg={12} md={12} spacing={4} sx={{ margin: "30px 0" }}>
                        <Grid item xs={12} sm={12} md={5} lg={4}>
                            <Box sx={{ backgroundImage: `url(${blogImg1})`, width: "100%", height: "250px", backgroundSize: "cover", borderRadius: "0px 90px 0px 90px", boxShadow: "-20px -20px 2px #B57E0A", alignItems: "end", display: "flex", flex: "column", justifyContent: "end" }}>
                                <Button sx={{ bgcolor: "#B57E0A", color: "#fff", border: "2px solid #B57E0A", transition: "0.7s", borderRadius: "0px 20px 0px 20px", marginTop: "auto", "&:hover": { color: "#B57E0A" } }}>Read More</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={8}>
                            <Box>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", fontWeight: "500", paddingBottom: "8px" }} mt={4}>1 Jun, 2013</Typography>
                                <Typography sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "36px" }}>Think Eat Save</Typography>
                                <Typography sx={{ fontSize: "15px", color: "#777777", }} mt={1}>To shed light on the rising global disturbances, the United Nations Environment Programme paved the way for World Environment Day in 1973. The fact that global issues can be resolved only when change begins at the grass-roots level and as a concerned group in society, Rajhans (Desai-Jain) Group launched an awareness campaign from June 1st to June 20th, 2013.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    
                    </Box>
                </Container>
            </Box>

        </div>
    )
}

export default NewsSection1;