import { Box, Container, Grid, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import highlights1 from '../../assets/images/ProjectView/highlights1.png'
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';

function KaruneshLuxuria() {
  const [activeItem, setActiveItem] = useState('Project');
  return (
    <div>
      <Box sx={{
        backgroundImage: `url(${highlights1})`, backgroundSize: "cover", backgroundPosition: "center", padding: "150px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Box sx={{ color: "white", borderRadius: "8px" }} >
              <Typography fontFamily={"Gothic A1, sans-serif"} sx={{
                fontSize: "25px", color: "white", paddingTop: "11px", "&:hover": {
                  color: "#c29943",
                  transition: ".3s"
                }
              }} >
                Karunesh Luxuria
              </Typography>
              <Typography sx={{ fontSize: "13px", color: "#B98619", mb: "30px" }}>
                HOME FOR THE STARS
              </Typography>
              <Typography>
                Completed Project
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: "50px" }}>
                <Typography sx={{ width: "50px", height: "50px", backgroundColor: "#cbab67b0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><SouthOutlinedIcon /></Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ position: "absolute", bottom: "-6%", left: "50%", transform: "translateX(-50%)", display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
            <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
                <MenuItem onClick={() => setActiveItem('Project')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                  <Typography component={'a'} href="#Project" sx={{ width: "90px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Project' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Project' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Project Overview</Typography>
                </MenuItem>
              </Grid>
              <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
                <MenuItem onClick={() => setActiveItem('Floor')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                  <Typography component={'a'} href="#Floor" sx={{ width: "90px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Floor' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Floor' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Floor Plan</Typography>
                </MenuItem>
              </Grid>
              <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
                <MenuItem onClick={() => setActiveItem('Gallery')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                  <Typography component={'a'} href="#Gallery" sx={{ width: "90px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Gallery' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Gallery' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Gallery</Typography>
                </MenuItem>
              </Grid>
              <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
                <MenuItem onClick={() => setActiveItem('Location')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                  <Typography component={'a'} href="#Location" sx={{ width: "90px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Location' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Location' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Location Map</Typography>
                </MenuItem>
              </Grid>
            </Grid>
          </Box>

        </Container>
      </Box>
      <Container>
        <Box display={{ lg: "none", md: "block", sm: "block", xs: "block" }}>
          <Grid container item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
              <MenuItem onClick={() => setActiveItem('Project')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                <Typography component={'a'} href="#Project" sx={{ width: "150px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Project' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Project' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Project Overview</Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
              <MenuItem onClick={() => setActiveItem('Floor')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                <Typography component={'a'} href="#Floor" sx={{ width: "150px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Floor' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Floor' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Floor Plan</Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
              <MenuItem onClick={() => setActiveItem('Gallery')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                <Typography component={'a'} href="#Gallery" sx={{ width: "150px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Gallery' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Gallery' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Gallery</Typography>
              </MenuItem>
            </Grid>
            <Grid item xs={12} lg={3} md={3} sm={6} sx={{ display: "flex", justifyContent: "center" }}>
              <MenuItem onClick={() => setActiveItem('Location')} sx={{ "&:hover": { backgroundColor: "unset" } }}>
                <Typography component={'a'} href="#Location" sx={{ width: "150px", textDecoration: "none", padding: "15px 38px", cursor: "pointer", borderRadius: "50px", background: activeItem === 'Location' ? 'linear-gradient(#CBAB67,#B57E0A)' : '#f4f4f4c2', whiteSpace: "nowrap", display: "flex", justifyContent: "center", color: activeItem === 'Location' ? '#FFFFFF' : '#6D6D6D', fontWeight: "600" }}>Location Map</Typography>
              </MenuItem>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default KaruneshLuxuria