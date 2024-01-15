import { IGroupSingle} from "@/interfaces"
import { FC } from "react"
import Card from "./Card"
import Day from "./Day"

const Group: FC<IGroupSingle> = ({group, dataMon}) => {

    const short = group.Timetable?.Day
    const unDay ={
        Lesson: [''],
        _N:''
    }

    return(
        <>
            <h3>{group._Name}</h3>
            {short ? (
                short.length ? (
                    short.map((day) => (
                        <Day key={day._N} day={day} dataMon={dataMon}/> 
                ))) : ''
            ): ''}
        </>
    )
}

export default Group