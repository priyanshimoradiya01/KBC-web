import React from 'react'
import KaruneshLuxuria from '../pages/ProjectView/KaruneshLuxuria'
import ProjectOverview from '../pages/ProjectView/ProjectOverview'
import FlorPlans from '../pages/ProjectView/FlorPlans'
import Slider1 from '../pages/ProjectView/Slider1 '
import Header from './global/Header'
import Footer from './global/Footer'

function ProjectView() {
    return (
        <div>
        <Header/>
            <KaruneshLuxuria />
            <ProjectOverview />
            <FlorPlans />
            <Slider1 />
            <Footer/>
        </div>
    )
}

export default ProjectView;