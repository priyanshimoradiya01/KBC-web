import React from "react";
import { Box, Container, Grid, ListItem, Typography } from "@mui/material";
import project1 from "../../assets/images/Home/RS6.jpg";
import project2 from "../../assets/images/Home/RS5.jpg";
import project3 from "../../assets/images/Home/project1.jfif";
import BWing from "../../assets/images/Home/B_wing.jfif";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Homesection2() {
  const projects = [
    {
      project_img: project1,
      project_name: "Karunesh Business Centre",
      project_name2: "Commercial",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project2,
      project_name: "Karunesh Business Centre 2",
      project_name2: "Open Residential plot",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project2,
      project_name: "Karunesh Icon",
      project_name2: "3 & 4 BHK Faboulious Living",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project3,
      project_name: "Karunesh Luxuria",
      project_name2: "2 BHK Faboulious Living",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: BWing,
      project_name: "Krunesh Homes",
      project_name2: "2 BHK Faboulious Living",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project2,
      project_name: "Karunesh Villa",
      project_name2: "Open Residential Plot",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project3,
      project_name: "Karunesh Villa 2",
      project_name2: "Open Residential Plot",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project3,
      project_name: "Karunesh Park",
      project_name2: "Open Residential Plot",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
    {
      project_img: project3,
      project_name: "Karunesh Textpa",
      project_name2: "Open Industrial Plot",
      project_name3: "Gujarat - Surat",
      backicon: <ArrowRightAltIcon sx={{ paddingRight: "10px" }} />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrow: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ background: "red" }}>
      <Box sx={{ backgroundColor: "#FAFAFA" }}>
        <Box sx={{ padding: "40px 0" }} >
          <Container>
            <Box sx={{ marginBottom: "50px", textAlign: "center" }}>
              <Typography sx={{
                fontSize: "14px", color: "#b88417", fontWeight: "500", "&:hover": {
                  color: "#000",
                  transition: ".3s"
                }
              }}>Our Developments</Typography>
              <Typography sx={{
                fontSize: "23px", fontWeight: "600", paddingTop: "10px", "&:hover": {
                  color: "#c29943",
                  transition: ".3s"
                }
              }}>Featured Projects</Typography>
            </Box>


            <Slider {...settings}>
              {projects.map((item) => {
                return (
                  <Box sx={{ position: "relative" }}>
                    <Box>
                      <Typography width={"300px"}>
                        <img
                          src={item.project_img}
                          alt=""
                          style={{ maxWidth: "100%", height: "auto", borderRadius: "20px", aspectRatio: "1/1" }}
                        />
                      </Typography>
                      <Box sx={{ backgroundColor: "white", width: "80%", borderRadius: "0px 10px 10px 0px" }}>
                        <Typography
                          sx={{
                            textAlign: "start",
                            fontSize: "17px",
                            fontWeight: "500",
                            paddingTop: "10px",
                            paddingLeft: "10px",
                          }}
                        >
                          {item.project_name}
                        </Typography>
                        <Typography
                          sx={{
                            textAlign: "start",
                            fontSize: "13px",
                            fontWeight: "500",
                            color: "gray",
                            paddingBottom: "4px",
                            paddingLeft: "10px",
                          }}
                        >
                          {item.project_name2}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderTop: "solid 1px #E3E3E3",
                            paddingLeft: "10px",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "12px",
                              fontWeight: "500",
                              color: "#BE9234",
                              paddingTop: "7px",
                            }}
                          >
                            {item.project_name3}
                          </Typography>
                          <Typography sx={{ color: "#BE9234" }}>
                            {item.backicon}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{
                            width: "30%",
                            backgroundColor: "#C49E4C",
                            textAlign: "center",
                            padding: "7px",
                            borderRadius: "0px 10px 0px 10px ",
                            position: "absolute",
                            top: "67%",
                            left: "0%",
                            color: "white",
                            fontSize: "14px",
                            border: "2px solid #c29943",
                            fontWeight: "600",
                            "&:hover": {
                              backgroundColor: "transparent",
                              color: "#c29943",
                            }
                          }}
                        >
                          Residential
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Homesection2;
