import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import RS2 from '../../assets/images/Residential/RS2.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Residentailsec2() {
    const data = [
        {
            title: "Karunesh Luxuria",
            description: "2 BHK Fabulous Living",
            location: "Gujarat - Surat"
        },
        {
            title: "Karunesh Villa",
            description: "Open Residential Plot",
            location: "Gujarat - Surat"
        },
        {
            title: "Karunesh Villa 2",
            description: "Open Residential Plot",
            location: "Gujarat - Surat"
        },
        {
            title: "Karunesh Homes",
            description: "2 BHK Fabulous Living",
            location: "Gujarat - Surat"
        },
        {
            title: "Karunesh Park",
            description: "Open Residential Plot",
            location: "Gujarat - Surat"
        }
    ];


    return (
        <Box sx={{ backgroundColor: "#FAFAFA" }} width={"100%"} paddingTop={5} paddingBottom={5}>
            <Container maxWidth="lg">
                <Box display={"flex"} justifyContent={"center"} padding={5}>
                    <Typography sx={{ fontSize: "26px", fontWeight: "700", fontFamily: "Gothic A1, sans-serif","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }}>Residential Properties</Typography>
                </Box>
                <Box padding={5}>
                    <Grid container spacing={3} paddingBottom={5}>
                        {data.map((item, index) => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "21px", padding: "0px 1px" }}>
                                    <Box sx={{ backgroundImage: `url(${RS2})`, width: "100%", height: "320px", backgroundSize: "cover", display: "flex", justifyContent: "flex-end", flexDirection: "column", borderRadius: "20px", backgroundPosition: "center", }}>
                                        <Button sx={{ bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "0px 20px 0px 20px", alignSelf: "flex-start" }}>Residential</Button>
                                    </Box>
                                    <Box paddingLeft={3} paddingBottom={2}>
                                        <Typography paddingTop={3} variant='h5' fontWeight={600} fontFamily={"Gothic A1, sans-serif"}>{item.title}</Typography>
                                        <Typography variant='h7' sx={{ color: "#8F8F8F" }} fontFamily={"Gothic A1, sans-serif"}>{item.description}</Typography>
                                    </Box>
                                    <Box padding={"0px 22px"} borderTop={"1px solid #E3E3E3"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} sx={{ color: "#B57E0A" }}>
                                        <Typography py={1} fontFamily={"Gothic A1, sans-serif"}>{item.location}</Typography>
                                        <ArrowRightAltIcon sx={{ fontWeight: "900" }} fontSize='large' />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box display={"flex"} justifyContent={"center"}>
                    <Button sx={{ bgcolor: "#C49D4B", color: "#fff", border: "2px solid #C49D4B", borderRadius: "50px", alignSelf: "flex-start",padding:"12px 15px","&:hover":{color:"#C49D48",bgcolor:"white"}}}>Show More Projects</Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Residentailsec2