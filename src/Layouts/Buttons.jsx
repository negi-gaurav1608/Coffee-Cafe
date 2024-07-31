import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <button className='px-6 py-1 border-white border-2 bg-[#FFDCAB] hover:text-[AB6B2E] transition-all rounded-full'>
                {props.title}
            </button>
        </div>
    )
}

export default Buttons
