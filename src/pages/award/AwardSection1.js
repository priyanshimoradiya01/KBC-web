


import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
// import nameimg1 from '../../assets/images/award/nameimage1.png'
// import nameimg2 from '../../assets/images/award/nameimage2.png'
// import nameimg3 from '../../assets/images/award/nameimage3.png'
import image1 from '../../assets/images/award/image1.png'
import image2 from '../../assets/images/award/image2.png'

function AwardSection1() {
    return (
        <>
            <Box sx={{ background: "#FAFAFA" }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "60px", marginBottom: "60px" }}>
                        <Typography sx={{ fontWeight: "600", fontSize: "30px", textAlign: "center","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }}>Awards</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={4} >
                            <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center" }}>
                                <Box sx={{ width: "100%", position: "relative", width: { lg: "100%", sm: "50%", md: "100%" } }}>
                                    <img src={image2} alt="" style={{ width: "100%", height: "auto" }} />
                                    <Box sx={{ position: "absolute", top: "5%", right: "0", width: { lg: "100%", sm: "100%", md: "100%" } }}>
                                        <img src={image1} alt="" style={{ width: "90%", height: "auto" }} />
                                    </Box>
                                    <Typography sx={{ position: "absolute", bottom: "25px", left: "5%", right: "5%", color: "white", fontWeight: "500", fontSize: "17px" }}>CREDAI Award</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center" }}>
                                <Box sx={{ width: "100%", position: "relative", width: { lg: "100%", sm: "50%", md: "100%" } }}>
                                    <img src={image2} alt="" style={{ width: "100%", height: "auto" }} />
                                    <Box sx={{ position: "absolute", top: "5%", right: "0", width: { lg: "100%", sm: "100%", md: "100%" } }}>
                                        <img src={image1} alt="" style={{ width: "90%", height: "auto" }} />
                                    </Box>
                                    <Typography sx={{ position: "absolute", bottom: {lg:"27px",xs:"8px",sm:"25px",md:"10px"}, left: "5%", right: "5%", color: "white", fontWeight: "500", fontSize: "17px" }}>Real Estate Developer of the Year [Surat]</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} sx={{ marginBottom: "50px" }}>
                            <Box sx={{ justifyContent: "center", display: "flex", alignItems: "center", textAlign: "center" }}>
                                <Box sx={{ width: "100%", position: "relative", width: { lg: "100%", sm: "50%", md: "100%" } }}>
                                    <img src={image2} alt="" style={{ width: "100%", height: "auto" }} />
                                    <Box sx={{ position: "absolute", top: "5%", right: "0", width: { lg: "100%", sm: "100%", md: "100%" } }}>
                                        <img src={image1} alt="" style={{ width: "90%", height: "auto" }} />
                                    </Box>
                                    <Typography sx={{ position: "absolute", bottom: "25px", left: "5%", right: "5%", color: "white", fontWeight: "500", fontSize: "17px" }}>UNEP Certificate</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default AwardSection1;
