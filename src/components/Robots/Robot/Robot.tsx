import Image from 'next/image'

import styles from './robot.module.css'

import { RobotData } from "@/@shared-types/RobotData";

import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Robot = ({robotData} : { robotData : RobotData}) => {
    return (
        <div className={[styles['robot-item'], inter.className].join(" ")}>
            <h3>{robotData.name}</h3>
            <div style={{position : 'absolute', right : 10, top : 10}}>
                <span style={{backgroundColor : '#fff', borderRadius : 4, fontSize : 12, color : '#000', paddingLeft : 12, paddingRight : 12, paddingTop : 2, paddingBottom : 2}}>{robotData.type} {robotData.season}</span>
            </div>
            
            <span>{robotData.biography}</span> 
        </div>
    )
}

export default Robot;