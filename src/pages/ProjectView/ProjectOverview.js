import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


function ProjectOverview() {
    return (
        <div style={{ padding: "100px 0" }}>
            <Container maxWidth="lg">
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={12} lg={6} md={6} sm={12}  >
                        <Box>
                            <Box>
                                <Typography sx={{ color: "#CBAB67", fontSize: "18px", fontWeight: "600", display: "flex", alignItems: "center" }}><KeyboardDoubleArrowLeftIcon /> Back to Projects</Typography>
                                <Typography fontFamily={"Gothic A1, sans-serif"} sx={{ color: "#000", mt: "10px", fontSize: "26px", fontWeight: "600", display: "flex", alignItems: "center" }}>Project Overview</Typography>
                                <Typography sx={{ color: "#616161", mt: "20px", display: "flex", alignItems: "center" }}>At Karunesh Luxuria, life is filled with prosperity and peacefulness all around. Nestled in the most desirable location on Swaminarayan Mishan Road, Surat, these 14-storey 2 & 3 BHK apartments offer a unique and peaceful living experience. With a grand entranceand serene waterbody, Karunesh Luxuria exudes elegance and charm. It offers arange of excellent amenities to make life more cheerful and jubilant.</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={12}  sx={{ display: {lg:"flex",md:"flex",sm:"block",xs:"block"}, justifyContent: "space-around", alignItems: "center" }} >
                        <Box sx={{paddingBottom:"20px"}}>
                            <Button variant="outlined" sx={{ backgroundColor: "#C49D4B", color: "white", padding: "0px 20px 0px 0px", borderRadius: "50px", "&:hover": { borderColor: "#C49D4B",backgroundColor:"transparent",color:"#C49D4B" }, transition: ".7s" }}>
                                <Box id="Dow" sx={{ backgroundColor: "#C49D4B", padding: "10px", marginRight: "10px", borderRight: "5px solid white", borderRadius: "50px", alignItems: "center", display: "flex",color:"#fff"}}>
                                    <LibraryBooksOutlinedIcon />
                                </Box>
                                Download Brochure
                            </Button>
                        </Box>
                        <Box sx={{paddingBottom:"20px"}}>
                            <Button
                                variant="outlined"
                                sx={{
                                    backgroundColor: "#C49D4B",
                                    color: "white",
                                    padding: "0px 20px 0px 0px",
                                    borderRadius: "50px",
                                    "&:hover": { borderColor: "#C49D4B",backgroundColor:"transparent",color:"#C49D4B" },
                                    transition: ".7s"
                                }}>
                                <Box sx={{ backgroundColor: "#C49D4B", padding: "10px", marginRight: "10px", borderRight: "5px solid white", borderRadius: "50px", alignItems: "center", display: "flex" ,color:"#fff"}}>
                                    <ShareOutlinedIcon />
                                </Box>
                                Share Project
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default ProjectOverview