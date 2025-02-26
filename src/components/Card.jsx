import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {motion} from "framer-motion"
const Card = ({ data, referenc }) => {
    return (
        
            <motion.div drag dragConstraints={referenc} className='flex-shrink-0 relative w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
                <FaRegFileAlt />
                <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
                <div className='footer absolute bottom-0  w-full  left-0'>
                    <div className='flex item-center py-3  px-8 justify-between mb-2'>
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full  flex items-center justify-center'>
                            {data.close ? <IoIosCloseCircleOutline /> : <FiDownload />}
                        </span>
                    </div>
                    {data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-500" : "bg-green-500"}`}>
                            <h3 className='text-sm font-semibold text-center'>{data.tag.tagTitle} </h3>
                        </div>
                    )}
                </div>
            </motion.div>
        
    )
}

export default Card
