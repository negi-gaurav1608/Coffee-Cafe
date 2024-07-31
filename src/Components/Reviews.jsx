import React from 'react'
import ReviewCard from '../Layouts/ReviewCard'
import pro1 from '../assets/pro1.jpeg'
import pro2 from '../assets/pro2.jpeg'
import pro3 from '../assets/pro3.jpeg'

const Reviews = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24'>
                Customers's Reviews
            </h1>
            <div className='flex flex-col lg:flex-row gap-5 justify-center py-4 my-8'>
                <ReviewCard img={pro1} title="Alex" des="This coffee shop has a warm and inviting atmosphere. The baristas are friendly, and the coffee is consistently excellent. The perfect spot for a relaxing break or catching up on work."/>
                <ReviewCard img={pro2} title="Sara" des="What sets this coffee shop apart is the friendly service and unique coffee blends. They always have something new to try, and the staff is knowledgeable and passionate about coffee."/>
                <ReviewCard img={pro3} title="Joe Belllengum" des="Ideal for casual business meetings. The atmosphere is professional yet relaxed, and the coffee is superb. Highly recommend the flat white."/>
            </div>
        </div>
    )
}

export default Reviews
