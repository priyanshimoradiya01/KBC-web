import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';

import fImg from "../../assets/images/Home/line1.png"
import sImg from "../../assets/images/Home/line2.png"
import roundImg from "../../assets/images/Home/logo1.png"
import roundFImg from "../../assets/images/Home/logo2.png"
import roundSecond from "../../assets/images/Home/logo3.png"
import roundThird from "../../assets/images/Home/logo3.png"
import roundForth from "../../assets/images/Home/logo4.png"
import roundFive from "../../assets/images/Home/logo5.png"


function Homesection5() {
    return (
        <div style={{ padding: "0 0 80px 0", marginTop: "140px" }}>
            <Box sx={{
                backgroundImage: `url(${fImg}), url(${sImg})`,
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundColor: "#F5F5F5",
                padding: "40px 0 0 0"
            }}>
                <Container>
                    <Box sx={{ textAlign: "center", padding: "0 0 0 0" }}>
                        <Typography sx={{
                            color: "#B78314", fontSize: "15PX", "&:hover": {
                                color: "#000",
                                transition: ".3s"
                            }
                        }}>Most Trusted Realty Group</Typography>
                        <Typography sx={{
                            fontSize: "22px", fontWeight: "600", "&:hover": {
                                color: "#c29943",
                                transition: ".3s"
                            }
                        }} mt={1}>Most Trusted Realty Group</Typography>
                    </Box>

                    <Box sx={{ marginTop: "30px", paddingBottom: "40px" }}>
                        <Grid container item xs={12} spacing={2} sx={{ justifyContent: "center", display: "flex", textAlign: "center", }} mt={3}>
                            <Grid item xs={12} lg={4} md={4} sm={6} sx={{}}>
                                <Box sx={{ backgroundRepeat: "no-repeat" }}>
                                    <img src={roundFImg} alt="" style={{ border: "3px solid #b78314", borderRadius: "100px", padding: "20px" }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Intelligent</Typography>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>design</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} md={4} sm={6} sx={{}}>
                                <Box sx={{ backgroundRepeat: "no-repeat" }}>
                                    <img src={roundSecond} alt="" style={{ border: "3px solid #b78314", borderRadius: "100px", padding: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Professional</Typography>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Approach</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} md={4} sm={6} sx={{}}>
                                <Box sx={{ backgroundRepeat: "no-repeat" }}>
                                    <img src={roundThird} alt="" style={{ border: "3px solid #b78314", borderRadius: "100px", padding: "20px" }} />
                                </Box>
                                <Box >
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Lifetime</Typography>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Durability</Typography>
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container item xs={12} spacing={2} sx={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
                            <Grid item xs={12} lg={4} md={4} sm={6} sx={{ margin: { xs: "20px 0 0 0" } }}>
                                <Box>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Quality</Typography>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Assurance</Typography>
                                </Box>
                                <Box sx={{ backgroundRepeat: "no-repeat" }}>
                                    <img src={roundForth} alt="" style={{ border: "3px solid #b78314", borderRadius: "100px", padding: "17px 28px" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} lg={4} md={4} sm={6} sx={{}}>
                                <Box >
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Green</Typography>
                                    <Typography sx={{ fontWeight: "600", fontSize: "17px" }}>Initiatives</Typography>
                                </Box>
                                <Box sx={{ backgroundRepeat: "no-repeat" }} mt={1}>
                                    <img src={roundFive} alt="" style={{ border: "3px solid #b78314", borderRadius: "100px", padding: "20px" }} />
                                </Box>

                            </Grid>
                        </Grid>
                    </Box>

                </Container>
            </Box>
        </div>
    )
}

export default Homesection5
