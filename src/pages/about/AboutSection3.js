import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import firstImg from "../../assets/images/aboutImg/Section3-FirstImg.png"
import secondImg from "../../assets/images/aboutImg/Section3-secondImg.png"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

function AboutSection3() {
    return (
        <div>
            <Box>
                <Container>
                    <Grid item container xs={12} spacing={2}>
                        <Grid item xs={12} lg={6} md={6} sm={12}>
                            <Box sx={{ backgroundImage: `url(${firstImg})`, height: "100%", backgroundColor: "#AE913C", backgroundSize: "cover", borderRadius: "10px" }}>
                                <Box sx={{ padding: "28px 30px 30px 30px" }}>
                                    <Typography sx={{ fontSize: "24px", color: "#fff"}}>Our Vision</Typography>
                                    <Typography sx={{ color: "#fff", fontSize: "15px" }} mt={3}>At Dwarkesh Group, our vision is to be the most trusted and respected builder, recognized for our exceptional craftsmanship, integrity, and ability to deliver beyond expectations. We strive to create landmarks that not only meet the needs of today but also stand the test of time.</Typography>
                                    <Typography sx={{ color: "#fff", fontSize: "17px", fontWeight: "600" }} mt={3}>Why Choose Dwarkesh Group?</Typography>
                                    <Typography sx={{ color: "#fff", fontSize: "15px" }} mt={1}>Experience & Expertise: With over two decades of experience, we bring unmatched expertise to every project.
                                        Quality Assurance: We adhere to the highest standards of quality, ensuring that every project is built to last.
                                        Customer-Centric Approach: Our clients are at the heart of everything we do. We listen, understand, and deliver to meet their unique needs.
                                        Sustainable Practices: We are committed to sustainable construction practices that minimize environmental impact and promote a greener future.
                                        Innovative Solutions: Our use of cutting-edge technology and innovative design ensures that our projects are at the forefront of industry trends.</Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={6} md={6} sm={12}>
                            <Box sx={{ justifyContent: { sm: "center" }, display: { sm: "flex" } ,height:"100%"}}>
                                <Box sx={{ backgroundImage: `url(${secondImg})`, height: "100%", backgroundColor: "#AE913C", backgroundSize: "cover", borderRadius: "10px" }}>
                                    <Box sx={{ padding: "28px 30px 40px 30px" }}>
                                        <Typography sx={{ fontSize: "24px", color: "#fff" }}>Our Mission</Typography>
                                        <Typography sx={{ color: "#fff", fontSize: "15px" }} mt={3}> Our mission is to provide our clients with superior construction solutions through a blend of innovative designs, cutting-edge technology, and unwavering commitment to quality. We aim to foster long-lasting relationships built on trust, transparency, and mutual respect.</Typography>
                                        <Typography sx={{ color: "#fff", fontSize: "15px" }} mt={3}>Our Commitment At Dwarkesh Group, we are dedicated to building not just structures but enduring relationships with our clients, partners, and the communities we serve. Our commitment to excellence, integrity, and sustainability drives us to continually push the boundaries of what is possible in the construction and real estate industry.
                                            Join us as we continue to build the future, one successful project at a time.
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default AboutSection3; 