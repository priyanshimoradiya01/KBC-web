import React from 'react'

import Box from '@mui/material/Box';
import mainAbout from "../../assets/images/aboutImg/mainAbout.png"
import { Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}
function MainBlog() {
    return (
        <Box alignItems={"center"} sx={{ backgroundImage: `url(${mainAbout})`, height: "100%", backgroundRepeat: "no-repeat", display: "flex", justifyContent: "center", textAlign: "center", backgroundSize: "cover", backgroundPosition: "center" }}>
            <Box sx={{ marginTop: "200px", paddingBottom: "55px" }}>
                <Typography py={2} sx={{ fontFamily: "Gothic A1, sans-serif", color: "white","&:hover":{
          color:"#c29943",
          transition:".3s"
        } }} fontWeight={600} variant='h4'>Blogs</Typography>
                <div onClick={handleClick}>
                    <Breadcrumbs sx={{ display: "flex", justifyContent: "center" }}>
                        <Link underline="hover" fontWeight={700} href="/material-ui/getting-started/installation/" sx={{ color: "#FFFF", }} > Home </Link>
                        <Link underline="none" fontWeight={700} href="/material-ui/getting-started/installation/" sx={{ color: "#C39C49", cursor: "default" }} >Blogs</Link>
                    </Breadcrumbs>
                </div>
            </Box>
        </Box>
    )
}

export default MainBlog;