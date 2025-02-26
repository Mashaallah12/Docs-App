import React, { useRef } from 'react'
import Card from './Card'

const Fourground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "The sun dipped below the horizon, casting a warm glow over the ocean. Waves gently lapped at the shore, their rhythmic sound a soothing lullaby. Seagulls soared above,",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green",
            }
        },
        {
            desc: "The old bookstore smelled of dust and ink, inviting visitors into its world of stories. Each book held a new adventure. Time seemed to stop in the cozy corners.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue",
            }
        },
        {
            desc: "A breeze stirred the trees, their leaves whispering secrets to the wind. Birds chirped in the distance, adding to the peace of the moment. Nature’s calm was refreshing.",
            filesize: ".9mb",
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "upload",
                tagColor: "green",
            }
        },
        {
            desc: "The fire crackled, its warmth filling the room. Snow fell gently outside, turning the world white. Inside, all was cozy and quiet.",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "upload",
                tagColor: "blue",
            }
        },
        {
            desc: "The fire crackled, its warmth filling the room. Snow fell gently outside, turning the world white. Inside, all was cozy and quiet.",
            filesize: ".9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "upload",
                tagColor: "green",
            }
        }

    ]
    return (
        <div ref={ref} className='p-5 fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
            {data.map((item, index) => (
                <Card data={item} referenc={ref}/>
            ))}
        </div>
    )
}

export default Fourground
