import React, {useState} from "react";
import { ConditionCard } from "./ConditionCard";
import './Hourly.css'

export const Hourly = (props) => {
    const {weather, isMetric} = props

    const [days, setDays] = useState({})

    function AllDays() {
        
        for(let i = 0; i < 7; i++) {
            
            return (<ConditionCard dayIndex={i} weather={weather} />)
            
        }

       
    }

    return (
        <div className="hourly-card">
            <ConditionCard dayIndex={0} hourIndex={0} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={1} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            <ConditionCard dayIndex={0} hourIndex={2} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={3} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            <ConditionCard dayIndex={0} hourIndex={4} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={5} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            <ConditionCard dayIndex={0} hourIndex={6} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={7} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            <ConditionCard dayIndex={0} hourIndex={8} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={9} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            <ConditionCard dayIndex={0} hourIndex={10} weather={weather} isDay={false} isMetric={isMetric} orientation="0"/>
            <ConditionCard dayIndex={0} hourIndex={11} weather={weather} isDay={false} isMetric={isMetric} orientation="1"/>
            {/* <AllDays /> */}
        </div>
    )
}