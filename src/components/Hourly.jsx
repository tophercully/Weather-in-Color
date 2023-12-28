import React, {useState} from "react";
import { ConditionCard } from "./ConditionCard";
import './Hourly.css'

export const Hourly = (props) => {
    const {weather} = props

    const [days, setDays] = useState({})

    function AllDays() {
        
        for(let i = 0; i < 7; i++) {
            
            return (<ConditionCard dayIndex={i} weather={weather} />)
            
        }

       
    }

    return (
        <div className="hourly-card">
            <ConditionCard dayIndex={0} hourIndex={0} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={1} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={2} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={3} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={4} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={5} weather={weather} isDay={false} />
            <ConditionCard dayIndex={0} hourIndex={6} weather={weather} isDay={false} end={true}/>
            {/* <AllDays /> */}
        </div>
    )
}