import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import m1 from '../../assets/images/mediaassets/1.png';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DownloadIcon from '@mui/icons-material/Download';

function Mediaassets1() {
    return (
        <>
            <Box sx={{ background: "#FAFAFA" }}>
                <Container maxWidth={"lg"}>
                    <Box sx={{ display: "flex", justifyContent: "center",marginTop: "60px", marginBottom: "60px" }}>
                        <Box sx={{width:"60%"}}>
                            <Typography sx={{display:"flex",justifyContent:"center", whiteSpace:"nowrap",fontWeight: "600", fontSize: "30px","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }}>Media Assets</Typography>
                            <Typography sx={{marginTop:"20px",color:"#616161",display:"flex",justifyContent:"center",textAlign:"center"}}>Explore Rajhans Group's digital transformation in media from print to digital. Join our journey, where we share compelling stories, achievements, and industry insights.</Typography>
                        </Box>
                    </Box>
                    <Grid item container spacing={4} xs={12}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ justifyContent: { sm: "center" }, display: { sm: "flex" } }}>
                                <Box sx={{ background: "white", border: "1px solid white", borderRadius: "0 50px 0 50px", padding: "30px" }}>
                                    <Box sx={{ position: "relative" }}>
                                        <img src={m1} alt="" style={{ width: "100%" }} />
                                        <Box sx={{ position: "absolute", right: "0", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "50px", width: "30px", padding: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A" }}><DownloadIcon sx={{ color: "white", fontSize: "30px" }} /></Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "600", fontSize: "20px", marginLeft: "25px", marginTop: "10px" }}>Corporate Brochure</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: "40px" }}>
                                        <Typography sx={{ fontSize: "15px", display: "flex", justifyContent: { sm: "end", xs: "center" }, color: "#B57E0A", fontWeight: "400", whiteSpace: "nowrap" }}>
                                            <CalendarTodayIcon sx={{ fontSize: "20px", color: "#B57E0A", marginRight: "5px" }} />
                                            17 Jan, 2024 : Dainik Bhaskar
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ justifyContent: { sm: "center" }, display: { sm: "flex" } }}>
                                <Box sx={{ background: "white", border: "1px solid white", borderRadius: "0 50px 0 50px", padding: "30px" }}>
                                    <Box sx={{ position: "relative" }}>
                                        <img src={m1} alt="" style={{ width: "100%" }} />
                                        <Box sx={{ position: "absolute", right: "0", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "50px", width: "30px", padding: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A" }}><DownloadIcon sx={{ color: "white", fontSize: "30px" }} /></Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "600", fontSize: "20px", marginLeft: "25px", marginTop: "10px" }}>Rajhans Realty Profile</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: "40px" }}>
                                        <Typography sx={{ fontSize: "15px", display: "flex", justifyContent: { sm: "end", xs: "center" }, color: "#B57E0A", fontWeight: "400", whiteSpace: "nowrap" }}>
                                            <CalendarTodayIcon sx={{ fontSize: "20px", color: "#B57E0A", marginRight: "5px" }} />
                                            17 Jan, 2024 : Dainik Bhaskar
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ marginBottom: "50px" }}>
                            <Box sx={{ justifyContent: { sm: "center" }, display: { sm: "flex" } }}>
                                <Box sx={{ background: "white", border: "1px solid white", borderRadius: "0 50px 0 50px", padding: "30px", }}>
                                    <Box sx={{ position: "relative" }}>
                                        <img src={m1} alt="" style={{ width: "100%" }} />
                                        <Box sx={{ position: "absolute", right: "0", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "50px", width: "30px", padding: "0 10px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A" }}><DownloadIcon sx={{ color: "white", fontSize: "30px" }} /></Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "600", fontSize: "20px", marginLeft: "25px", marginTop: "10px" }}>Rajhans Realty Profile</Typography>
                                    </Box>
                                    <Box sx={{ marginTop: "40px" }}>
                                        <Typography sx={{ fontSize: "15px", display: "flex", justifyContent: { sm: "end", xs: "center" }, color: "#B57E0A", fontWeight: "400", whiteSpace: "nowrap" }}>
                                            <CalendarTodayIcon sx={{ fontSize: "20px", color: "#B57E0A", marginRight: "5px" }} />
                                            17 Jan, 2024 : Dainik Bhaskar
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Mediaassets1
