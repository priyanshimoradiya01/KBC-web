import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

function FaqSection1() {
    return (
        <Box sx={{ background: "#FAFAFA", py: 4 }}>
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", justifyContent: "center", mb: 6 }}>
                    <Typography sx={{ fontWeight: 600, fontSize: { xs: "24px", md: "30px" } ,"&:hover":{
          color:"#c29943",
          transition:".3s"
        }}}>
                        FAQ's for NRI
                    </Typography>
                </Box>
                <Box>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" }}}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>1.</span>What types of projects does Dwarkesh Group specialize in?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Dwarkesh Group specializes in a diverse range of construction projects, including residential, industrial, and commercial. Whether you’re looking to build a new home, develop a state-of-the-art industrial facility, or create a dynamic commercial space, our expertise and experience cover all these sectors.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>2.</span>How long has Dwarkesh Group been in business?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Dwarkesh Group has been a leading name in the construction and real estate industry for over 20 years. Our long-standing presence in the market is a testament to our commitment to quality and customer satisfaction.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>3.</span>What is your process for starting a new project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Our process begins with an initial consultation to understand your vision and requirements. We then proceed with detailed planning, including design and budgeting. Once approved, we move on to construction, ensuring regular updates and communication throughout the project. We strive to deliver your project on time and within budget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel4-content"
                            id="panel4-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>4.</span>Can you handle both residential and commercial projects? </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Yes, we have extensive experience in both residential and commercial projects. From luxurious homes and apartment complexes to office spaces and retail centers, we have the expertise to handle a wide variety of project types.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel5-content"
                            id="panel5-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>5.</span>How do you ensure the quality of your construction work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Quality is at the core of everything we do. We use the highest quality materials and adhere to stringent construction standards. Our experienced team conducts regular inspections and quality checks throughout the construction process to ensure that every project meets our rigorous standards.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel6-content"
                            id="panel6-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>6.</span>Are you able to work within a specific budget? </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Absolutely. We work closely with our clients to develop a project plan that aligns with their budget. Our team provides detailed cost estimates and helps find cost-effective solutions without compromising on quality. We are committed to transparency and will keep you informed of any changes that may affect the budget.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel7-content"
                            id="panel7-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>7.</span> What are your sustainability practices?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            You can reach us through our contact page on this website, where you’ll find our phone number, email address, and a contact form. Alternatively, you can visit our office during business hours. We look forward to discussing your project and how we can bring your vision to life.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel8-content"
                            id="panel8-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>8.</span>How can I get in touch with Dwarkesh Group to discuss a potential project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Yes, we provide comprehensive project management services. Our team will oversee every aspect of your project, from planning and design to execution and completion. We ensure that all phases are managed efficiently and that the project is delivered to your satisfaction.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel9-content"
                            id="panel9-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>9.</span>Do you offer project management services?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Before starting a construction project, consider factors such as your budget, project goals, timeline, and any specific requirements you may have. It’s also important to select a reliable and experienced construction partner. At Dwarkesh Group, we are here to guide you through every step and help you make informed decisions.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel10-content"
                            id="panel10-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>10.</span>Can I see examples of your previous work?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            We understand that changes can be a part of any project. If modifications are required, we will assess their impact on the project’s scope, timeline, and budget. Our team will provide you with updated estimates and timelines, and we’ll ensure that any changes are implemented seamlessly.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel11-content"
                            id="panel11-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>11.</span> What should I consider before starting a construction project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            Certainly! We invite you to explore our portfolio section, where you can view detailed case studies and images of our completed projects. This will give you a sense of our work quality and the diverse types of projects we have successfully executed.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ padding: "20px 20px", marginTop: "10px", boxShadow: "none", my: 1, boxShadow: "none", position: "unset" }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: "#CBAB67", fontSize: { xs: "24px", md: "30px" } }} />}
                            aria-controls="panel11-content"
                            id="panel11-header"
                        >
                            <Typography sx={{ fontSize: "18px", display: "flex",fontSize: { xs: "15px", md: "18px", sm:"18px" } }}> <span style={{ color: "#CBAB67", marginRight: "7px" }}>12.</span> How do you handle changes or modifications during the project?</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ color: "#777777" }}>
                            We understand that changes can be a part of any project. If modifications are required, we will assess their impact on the project’s scope, timeline, and budget. Our team will provide you with updated estimates and timelines, and we’ll ensure that any changes are implemented seamlessly.
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Box>
    );
}

export default FaqSection1;
