import React from 'react'
import Flor1 from '../../assets/images/ProjectView/Flor_1.png'
import Flor2 from '../../assets/images/ProjectView/Flor_2.png'
import Flor3 from '../../assets/images/ProjectView/Flor_3.png'
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function FlorPlans() {

    const Florplan = [
        {
            img: Flor1,
            name: "Layout Plans"
        },
        {
            img: Flor2,
            name: "2 BHK Typical Layout"
        },
        {
            img: Flor3,
            name: "3 BHK Typical Layout"
        },
    ];
    return (
        <div style={{ padding: "100px 0" }}>
            <Container maxWidth="lg">
                <Box mb={4}>
                    <Box sx={{ display: 'flex', justifyContent: "center", mb:"20px" }}>
                        <Typography sx={{ fontSize: "26px","&:hover":{
                            color:"#c29943",
                            transition:".3s"
                        } }}>Floor Plans</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: "center", }}>
                        <Button
                            variant="outlined"
                            sx={{
                                backgroundColor: "#C49D4B",
                                color: "white",
                                padding: "0px 20px 0px 0px",
                                borderRadius: "50px",
                                "&:hover": { borderColor: "#C49D4B", backgroundColor: "transparent", color: "#C49D4B" },
                                transition: ".7s"
                            }}>
                            <Box sx={{ backgroundColor: "#C49D4B", padding: "10px", marginRight: "10px", borderRight: "5px solid white", borderRadius: "50px", alignItems: "center", display: "flex", color: "#fff" }}>
                                <PictureAsPdfIcon />
                            </Box>
                            Share Project
                        </Button>
                    </Box>
                </Box>
                <Grid container spacing={3} py={2} paddingBottom={10} display={"flex"} sx={{ justifyContent: { md: "center", sm: "center" } }}>
                    {Florplan.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                            <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "21px", padding: "0px 1px", boxShadow: "0px 0px 10px #00000030" }}>
                                <Box sx={{ backgroundImage: `url(${item.img})`, width: "100%", height: "350px", backgroundSize: "cover", display: "flex", justifyContent: "flex-start", flexDirection: "column", borderRadius: "20px", backgroundPosition: "center", }}>
                                    <Button sx={{ bgcolor: "#f4f4f4c2", color: "#6D6D6D", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-end", fontWeight: "600", "&:hover": { backgroundColor: "#B57E0A", color: "#fff", transition: ".5s" } }}>Residential</Button>
                                </Box>
                                <Box padding={"12px 22px"} sx={{ color: "#B57E0A", fontWeight: "600" }}>
                                    <Typography py={1} fontWeight={"600"}>{item.name}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default FlorPlans