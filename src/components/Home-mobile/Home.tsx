
import { Welcome} from "@/interfaces"
import { FC } from "react"
import Group from '../ui-mob/Group'

const Home: FC<Welcome> = (data) => {
    console.log(data)
    return(
        <>
            {data.YhZav.ListGroup.Group.map((group) => (
                    <Group group={group}/>
                ))}
        </>
    )
}



export default Home