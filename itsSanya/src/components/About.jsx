import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../style'
import {services} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'


const ServiceCard=({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] text-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am Sanya Chawla, a passionate and driven individual, majoring in Computer Science Engineering with a focus on AI and ML. My journey has been marked by academic excellence, with a remarkable 8.8 CGPA at VIT Bhopal University. I excel in Python, web development, and have hands-on experience in machine learning, culminating in the development of the Amazon Recommender System, exceeding industry standards.
      My commitment extends to problem-solving, earning a 3-star rating on Hackerrank in C++. Outside the technical realm, I'm a Gold Medalist in the English Olympiad and a skilled debater. My leadership roles in various clubs have honed my organizational and teamwork skills.
      My mission is to bring innovation and impact through technology.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")