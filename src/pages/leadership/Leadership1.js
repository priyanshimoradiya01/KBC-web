import { Box, Container, Typography, Grid } from '@mui/material'
import React from 'react'
import photo from '../../assets/images/leadership/1.png'
import image from '../../assets/images/leadership/2.png'

function Leadership1() {
    return (
        <Box>
            <Container maxWidth={"lg"}>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "60px", marginBottom: "60px" }}>
                    <Box sx={{ width: "60%" }}>
                        <Typography sx={{
                            display: "flex", justifyContent: "center", whiteSpace: "nowrap", fontWeight: "600", fontSize: { lg: "30px", xs: "24px" }, "&:hover": {
                                color: "#c29943",
                                transition: ".3s"
                            }
                        }}>Our Management Team</Typography>
                        <Typography sx={{ marginTop: "20px", color: "#616161", display: "flex", justifyContent: "center", textAlign: "center", fontSize: { xs: "18px", lg: "16px" } }}>Rajhans (Desai-Jain) Group is guided by dynamic leaders who instill their values in the workforce, ensuring growth across various business verticals. With their technical expertise, profound domain knowledge, and extensive cross-functional experience, the group consistently strives for new benchmarks while
                            spreading the 'Wings of Happiness.'</Typography>
                    </Box>
                </Box>
                <Box>
                    <Grid item container xs={12} spacing={2}>
                        <Grid item xs={12} lg={4} md={5} sm={12} sx={{ justifyContent: { sm: "center", xs: "center" }, display: { lg: "flex", sm: "flex", xs: "flex" }, textAlign: { sm: "center", xs: "center" } }}>
                            <Box>
                                <Box sx={{ position: "relative", width: { lg: "380px", md: "380px", sm: "450px", xs: "100%" } }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "4%",
                                            left: "4%",
                                            width: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt=""
                                            style={{ width: "70%", height: "auto" }}
                                        />
                                        <Box sx={{ position: "absolute", right: "15%", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "45px", width: "25px", padding: "0 50px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A", whiteSpace: "nowrap", color: "white", "&:hover": { color: "#B57E0A", backgroundColor: "#02070A", transition: ".3s" } }}>Read More</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={8} md={7} sm={12}>
                            <Box sx={{ textAlign: { sm: "center", xs: "center", lg: "start", md: "start" } }}>
                                <Typography sx={{ fontSize: { lg: "22px", xs: "19px" }, color: "#000000", fontWeight: "600", marginTop: { lg: "80px", md: "42px", xs: "20px" } }}>Sanjaybhai Sudani</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", marginTop: "10px", fontWeight: "600" }}>Group Chairman</Typography>
                                <Typography sx={{ marginTop: "15px", marginBottom: "15px", borderBottom: "1px solid #B57E0A" }}></Typography>
                                <Typography sx={{ color: "#777777", lineHeight: "26px", fontSize: { lg: "19px", xs: "16px" } }}>With over 20 years of experience in the construction and real estate industry, Mr. SanjayBhai Sudani is the visionary founder and CEO of Dwarkesh Group. His leadership and strategic foresight have been instrumental in steering the company to new heights. Known for his innovative thinking and commitment to quality, Mr. SanjayBhai Sudani has been the driving force behind many of our landmark projects. His deep understanding of market trends and client needs has enabled Dwarkesh Group to deliver exceptional value across all sectors.</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} md={5} sm={12} sx={{ marginTop: "60px", justifyContent: { sm: "center", xs: "center" }, display: { lg: "flex", sm: "flex", xs: "flex" }, textAlign: { sm: "center", xs: "center" } }}>
                            <Box>
                                <Box sx={{ position: "relative", width: { lg: "380px", md: "380px", sm: "450px", xs: "100%" } }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "4%",
                                            left: "4%",
                                            width: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt=""
                                            style={{ width: "70%", height: "auto" }}
                                        />
                                        <Box sx={{ position: "absolute", right: "15%", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "45px", width: "25px", padding: "0 50px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A", whiteSpace: "nowrap", color: "white", "&:hover": { color: "#B57E0A", backgroundColor: "#02070A", transition: ".3s" } }}>Read More</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={8} md={7} sm={12}>
                            <Box sx={{ textAlign: { sm: "center", xs: "center", lg: "start", md: "start" } }}>
                                <Typography sx={{ fontSize: { lg: "22px", xs: "19px" }, color: "#000000", fontWeight: "600", marginTop: { lg: "125px", md: "95px", xs: "20px" } }}>Rajubhai Kakadiya</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", marginTop: "10px", fontWeight: "600" }}>Group Chairman</Typography>
                                <Typography sx={{ marginTop: "15px", marginBottom: "15px", borderBottom: "1px solid #B57E0A" }}></Typography>
                                <Typography sx={{ color: "#777777", lineHeight: "26px", fontSize: { lg: "19px", xs: "16px" } }}> Mr. RajuBhai Kakadiya brings a wealth of operational expertise to Dwarkesh Group as our COO. With a strong background in project management and a keen eye for detail, she oversees the day-to-day operations, ensuring that every project runs smoothly and efficiently. Her hands-on approach and dedication to excellence ensure that we consistently meet our high standards of quality and timeliness. Ms. RajuBhai Kakadiya is known for her ability to streamline processes and foster a culture of continuous improvement within the organization.</Typography>
                            </Box>
                        </Grid>


                        <Grid item xs={12} lg={4} md={5} sm={12} sx={{ marginTop: "60px", justifyContent: { sm: "center", xs: "center" }, display: { lg: "flex", sm: "flex", xs: "flex" }, textAlign: { sm: "center", xs: "center" } }}>
                            <Box>
                                <Box sx={{ position: "relative", width: { lg: "380px", md: "380px", sm: "450px", xs: "100%" } }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "4%",
                                            left: "4%",
                                            width: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt=""
                                            style={{ width: "70%", height: "auto" }}
                                        />
                                        <Box sx={{ position: "absolute", right: "15%", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "45px", width: "25px", padding: "0 50px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A", whiteSpace: "nowrap", color: "white", "&:hover": { color: "#B57E0A", backgroundColor: "#02070A", transition: ".3s" } }}>Read More</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={8} md={7} sm={12}>
                            <Box sx={{ textAlign: { sm: "center", xs: "center", lg: "start", md: "start" } }}>
                                <Typography sx={{ fontSize: { lg: "22px", xs: "19px" }, color: "#000000", fontWeight: "600", marginTop: { lg: "125px", md: "95px", xs: "20px" } }}>KantiBhai Kakadiya</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", marginTop: "10px", fontWeight: "600" }}>Group Chairman</Typography>
                                <Typography sx={{ marginTop: "15px", marginBottom: "15px", borderBottom: "1px solid #B57E0A" }}></Typography>
                                <Typography sx={{ color: "#777777", lineHeight: "26px", fontSize: { lg: "19px", xs: "16px" } }}> Mr. KantiBhai Kakadiya brings a wealth of operational expertise to Dwarkesh Group as our COO. With a strong background in project management and a keen eye for detail, she oversees the day-to-day operations, ensuring that every project runs smoothly and efficiently. Her hands-on approach and dedication to excellence ensure that we consistently meet our high standards of quality and timeliness. Ms. KantiBhai Kakadiya is known for her ability to streamline processes and foster a culture of continuous improvement within the organization.</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} md={5} sm={12} sx={{ marginTop: "60px", justifyContent: { sm: "center", xs: "center" }, display: { lg: "flex", sm: "flex", xs: "flex" }, textAlign: { sm: "center", xs: "center" } }}>
                            <Box>
                                <Box sx={{ position: "relative", width: { lg: "380px", md: "380px", sm: "450px", xs: "100%" } }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "4%",
                                            left: "4%",
                                            width: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt=""
                                            style={{ width: "70%", height: "auto" }}
                                        />
                                        <Box sx={{ position: "absolute", right: "15%", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "45px", width: "25px", padding: "0 50px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A", whiteSpace: "nowrap", color: "white", "&:hover": { color: "#B57E0A", backgroundColor: "#02070A", transition: ".3s" } }}>Read More</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={8} md={7} sm={12}>
                            <Box sx={{ textAlign: { sm: "center", xs: "center", lg: "start", md: "start" } }}>
                                <Typography sx={{ fontSize: { lg: "22px", xs: "19px" }, color: "#000000", fontWeight: "600", marginTop: { lg: "125px", md: "95px", xs: "20px" } }}>Bhavsanbhai Mangroliya</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", marginTop: "10px", fontWeight: "600" }}>Group Chairman</Typography>
                                <Typography sx={{ marginTop: "15px", marginBottom: "15px", borderBottom: "1px solid #B57E0A" }}></Typography>
                                <Typography sx={{ color: "#777777", lineHeight: "26px", fontSize: { lg: "19px", xs: "16px" } }}>As the CFO of Dwarkesh Group, Mr. Bhavsanbhai Mangroliya is responsible for managing the company’s financial health and ensuring sustainable growth. With extensive experience in financial planning, analysis, and risk management, he provides strategic financial insights that guide our decision-making process. Mr. Bhavsanbhai Mangroliya is adept at aligning financial strategies with our business goals, ensuring that we maintain a strong and stable financial foundation. His expertise in financial management has been pivotal in driving our profitability and long-term success.</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={4} md={5} sm={12} sx={{ marginTop: "60px", justifyContent: { sm: "center", xs: "center" }, display: { lg: "flex", sm: "flex", xs: "flex" }, textAlign: { sm: "center", xs: "center" } }}>
                            <Box>
                                <Box sx={{ position: "relative", width: { lg: "380px", md: "380px", sm: "450px", xs: "100%" } }}>
                                    <img
                                        src={image}
                                        alt=""
                                        style={{ width: "70%", height: "auto" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "4%",
                                            left: "4%",
                                            width: { lg: "400px", md: "400px", sm: "100%", xs: "100%" },
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt=""
                                            style={{ width: "70%", height: "auto" }}
                                        />
                                        <Box sx={{ position: "absolute", right: "15%", bottom: "5px" }}>
                                            <Typography sx={{ border: "1px solid #B57E0A", borderRadius: "0 20px 0 20px", height: "45px", width: "25px", padding: "0 50px", display: "flex", justifyContent: "center", alignItems: "center", background: "#B57E0A", whiteSpace: "nowrap", color: "white", "&:hover": { color: "#B57E0A", backgroundColor: "#02070A", transition: ".3s" } }}>Read More</Typography>
                                        </Box>
                                    </Box>

                                </Box>
                            </Box>

                        </Grid>
                        <Grid item xs={12} lg={8} md={7} sm={12}>
                            <Box sx={{ textAlign: { sm: "center", xs: "center", lg: "start", md: "start" } }}>
                                <Typography sx={{ fontSize: { lg: "22px", xs: "19px" }, color: "#000000", fontWeight: "600", marginTop: { lg: "125px", md: "95px", xs: "20px" } }}>Jitubhai Sudani</Typography>
                                <Typography sx={{ fontSize: "18px", color: "#B57E0A", marginTop: "10px", fontWeight: "600" }}>Group Chairman</Typography>
                                <Typography sx={{ marginTop: "15px", marginBottom: "15px", borderBottom: "1px solid #B57E0A" }}></Typography>
                                <Typography sx={{ color: "#777777", lineHeight: "26px", fontSize: { lg: "19px", xs: "16px" } }}>Mr. Jitubhai Sudani , our CMO, is the creative force behind our brand and marketing strategies. With a passion for innovation and a deep understanding of market dynamics, she leads our efforts to connect with clients and stakeholders effectively. Her strategic marketing initiatives have enhanced our brand visibility and reputation, positioning Dwarkesh Group as a leader in the industry. Mr. Jitubhai Sudani excels at developing campaigns that resonate with our audience and drive engagement, ensuring that our projects receive the recognition they deserve.</Typography>
                            </Box>
                        </Grid>


                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Leadership1

