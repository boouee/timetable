
import {Welcome} from "@/interfaces"
import { FC } from "react"
import Group from '../ui-mob/Group'

const Home: FC<Welcome> = (data) => {

    const dayWeek = data.YhZav.Work.split(' ')
    const dayWork = [dayWeek[1].split('/'), dayWeek[3].split('/')]
    
    const dataMon = {
        dayMon: data.YhZav.Monday.split('.'),
        dayWeekStart: dayWork[0],
        dayWeekEnd: dayWork[1] 
    }
    return(
        <>
            {data.YhZav.ListGroup.Group.map((group) => (
                    <Group key={group._Name} group={group} dataMon={dataMon} />
                ))}
        </>
    )
}



export default Home