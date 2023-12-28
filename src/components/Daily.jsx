import React, {useState} from "react";
import { ConditionCard } from "./ConditionCard";
import './Daily.css'

export const Daily = (props) => {
    const {weather} = props

    const [days, setDays] = useState({})

    function AllDays() {
        
        for(let i = 0; i < 7; i++) {
            
            return (<ConditionCard dayIndex={i} weather={weather} />)
            
        }

       
    }

    return (
        <div className="daily-card">
            <ConditionCard dayIndex={0} weather={weather} isDay={true} />
            <ConditionCard dayIndex={1} weather={weather} isDay={true} />
            <ConditionCard dayIndex={2} weather={weather} isDay={true} />
            <ConditionCard dayIndex={3} weather={weather} isDay={true} />
            <ConditionCard dayIndex={4} weather={weather} isDay={true} />
            <ConditionCard dayIndex={5} weather={weather} isDay={true} />
            <ConditionCard dayIndex={6} weather={weather} isDay={true} end={true}/>
            {/* <AllDays /> */}
        </div>
    )
}