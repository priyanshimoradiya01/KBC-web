import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import image1 from "../../assets/images/sustainability/image1.png"
import image2 from "../../assets/images/sustainability/image2.png"

function Sustainabilitysection1() {
  return (
    <>
      <Box>
        <Container maxWidth={"lg"}>
          <Box>
            <Grid item container xs={12} sx={{ margin: "55px 0" }}>
              <Grid item xs={12} lg={6} md={6} sm={12}>
                <Box>
                  <Typography sx={{ fontSize: "30px", fontWeight: "700" }}>Sustainability</Typography>
                </Box>
                <Box sx={{ margin: "13px 0 0 0" }}>
                  <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "21px" }}>At Rajhans Realty, our commitment to responsible business practices shapes a brighter future. Sustainability is at the core of our operations, where we employ eco-friendly technologies, foster a culture of conservation, and actively work to minimize our environmental footprint.</Typography>
                  <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "21px", margin: "22px 0" }}>Our sustainable initiatives encompass social responsibility, environmental concerns, ethical business practices, and community engagement. We invest in employee well-being, support local communities, and prioritize fair and transparent business dealings. By integrating sustainability into our core values, we strive to make a positive contribution to the world, maintaining a harmonious balance between business growth and environmental and social responsibility.</Typography>
                  <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "21px", margin: "22px 0" }}>We take pride in our commitment to sustainability, evidenced by various accolades and initiatives. Notably, we were honored with the Swachh Bharat Award (2017) by the Surat Municipal Corporation, recognizing our dedication to cleanliness and environmental responsibility. Additionally, securing 'The Green Commercial Project of the Year' award (2023) highlights our commitment to environmentally friendly business practices.</Typography>
                  <Typography sx={{ color: "#616161", fontSize: "15px", lineHeight: "21px", display: { lg: "block", md: "none", sm: "block", xs: "block" } }}>At Rajhans Realty, we understand the significance of our role in creating a better world, and these achievements underscore our ongoing journey towards a more responsible future.</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} lg={6} md={6} sm={12} >
                <Box sx={{ justifyContent: "center", display: "flex", alignItems: "end", textAlign: "center" }} mt={2}>
                  <Box sx={{ width: "400px", position: "relative",margin:{xs:"0 0 0 20px"} }}>
                    <img src={image2} alt="" style={{ maxWidth: "100%", height: "auto" }} />
                    <Box sx={{ position: "absolute", top: "1%", right: "3%", width: "107%" }}><img src={image1} alt="" style={{ maxWidth: "100%", height: "auto" }} /></Box>
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Sustainabilitysection1
