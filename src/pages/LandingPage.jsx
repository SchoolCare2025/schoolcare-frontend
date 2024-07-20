import React from 'react'
import Homepage from './Homepage'
import Registered from './registered'
import AboutUs from './AboutUs'
import Services from './Services'
import Testimonials from './Testinonials'
import FeaturedSchools from './FeaturedSchools'
import Blog from './Blog'


export const LandingPage = () => {
    return (
        <div>
            <Homepage />
            <Registered />
            <AboutUs />
            <Services />
            <Testimonials />
            <FeaturedSchools />
            <Blog /> 
        </div>
    )
}
