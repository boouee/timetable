import { IGroupSingle } from "@/interfaces"
import { FC } from "react"
import Card from "./Card"
import Day from "./Day"

const Group: FC<IGroupSingle> = (group) => {

    const short = group.group.Timetable?.Day

    console.log(group)
    const unDay ={
        Lesson: [''],
        _N:''
    }

    return(
        <>
            <h3>{group.group._Name}</h3>
            {short ? (
                short.length > 0 ? (
                    short.map((day) => (
                        <Day day={day} /> 
                ))) : ''
            ): ''}
        </>
    )
}

export default Group