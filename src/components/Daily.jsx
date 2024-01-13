import React, {useState} from "react";
import { ConditionCard } from "./ConditionCard";
import './Daily.css'

export const Daily = (props) => {
    const {weather} = props

    const [days, setDays] = useState({})

    return (
        <div className="daily-card">
            

            <ConditionCard dayIndex={0} weather={weather} isDay={true} orientation="1"/>
            <ConditionCard dayIndex={1} weather={weather} isDay={true} orientation="0"/>
            <ConditionCard dayIndex={2} weather={weather} isDay={true} orientation="1"/>
            {/* <ConditionCard dayIndex={3} weather={weather} isDay={true} orientation="0"/>
            <ConditionCard dayIndex={4} weather={weather} isDay={true} orientation="1"/>
            <ConditionCard dayIndex={5} weather={weather} isDay={true} orientation="0"/>
            <ConditionCard dayIndex={6} weather={weather} isDay={true} orientation="1"/> */}
            {/* <AllDays /> */}
        </div>
    )
}