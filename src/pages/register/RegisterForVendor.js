import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react'
import FImg from "../../assets/images/registerImg/firstImg.png"

function RegisterForVendor() {

    return (
        <div>
            <Box>
                <Container maxWidth={"lg"}>
                    <Box sx={{ justifyContent: "center", display: "flex",margin:"60px 0 0 0" }}>
                        <Box sx={{ backgroundImage: `url(${FImg})`, height: "auto", width: "70%", backgroundColor: "#24272c", padding: "30px 40px",borderRadius:"30px" }}>
                            <Box sx={{ color: "#fff" }}>
                                <Typography sx={{ fontSize: "22px" }}>Register for Vendor</Typography>
                                <Typography sx={{ fontSize: "15px", color: "#c49c49" }} mt={1}>Kindly provide your details below and our representative will get back to you.</Typography>
                            </Box>
                            <Box sx={{ margin: { lg: "25px 0 0 0", md: "25px 0 0 0", sm: "25px 0 0 0", xs: "25px 0 0 0" } }}>
                                <Grid container item spacing={2}>
                                    <Grid item xs={12} lg={6} md={6} sm={12} >
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='First Name' style={{ border:"none",outline:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Company Name' style={{ outline: "none", border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Contact No. *' style={{ outline: "none", border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Email ID *' style={{ outline: "none",  border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='City' style={{ outline: "none",  border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Zip Code' style={{ outline: "none",  border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='State' style={{ outline: "none", border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={6} md={6} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Country' style={{ outline: "none", border:"none", width: "97%", padding: "12px 0 12px 15px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={12} md={12} sm={12}>
                                        <Box sx={{}}>
                                            <input type="text" className='oneinput' placeholder='Your Message *' style={{ outline: "none", border:"none", width: "98%", padding: "12px 0 90px 15px", borderRadius: "7px" }} />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} lg={3} md={3} sm={4}>
                                        <Box sx={{ backgroundColor: "#c49538", padding: "10px", textAlign: "center", color: "#fff", borderRadius: "20px" }} >Submit</Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default RegisterForVendor;