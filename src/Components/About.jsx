import React from 'react'
import Buttons from '../Layouts/Buttons'

const About = () => {
    return (
        <div className='min-h-screen flex flex-col items-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-5'>
                About Us
            </h1>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
                <div className='w-full lg:m-2/4'>
                <video className='w-auto rounded-lg' controls autoPlay loop muted >
                <source src="https://videos.pexels.com/video-files/4378109/4378109-sd_640_360_25fps.mp4" type="video/mp4" />
                
                </video>
                </div>
                <div className='w-full lg:w-2/4 p-4 space-y-3'>
                    <h2 className='font-semibold text-3xl'>What Makes our Coffee Special?</h2>
                    <p className=''>
                    Sourced from the finest coffee-growing regions around the globe, our beans are carefully selected to ensure only the highest quality. Each batch is roasted to perfection, bringing out unique flavors and rich aromas that tantalize the senses. Our commitment to sustainability means that every cup not only tastes good but also does good for the environment and the communities that cultivate our beans. With an unwavering dedication to excellence, our coffee offers an unparalleled experience that delights coffee enthusiasts and casual drinkers alike.
                    </p>
                    <p>
                    Our coffee stands out due to its meticulously sourced beans from top global regions, ensuring unparalleled flavor. We prioritize ethical, sustainable farming practices, and our expert roasters craft each batch to perfection. Paired with our skilled baristas' dedication, every cup delivers a rich, aromatic experience that's truly exceptional.
                    </p>
                    <Buttons title="Learn More"/>
                </div>
            </div>
        </div>
    )
}

export default About
