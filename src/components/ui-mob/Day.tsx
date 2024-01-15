import { IDaySingle } from "@/interfaces"
import { FC } from "react"


const Day:FC<IDaySingle> = (day) => {
    console.log(day)
    const getDay = (num: string) => {
        switch (num){
       
            case '1':
                return 'Понедельник';
            case '2':
                return 'Вторник';
            case '3':
                return 'Среда';
            case '4':
                return 'Четврег';
            case '5':
                return 'Пятница';
            case '6':
                return 'Суббота';
        };
    }
    
    return(
        <>
            <h3>{getDay(day.day._N)}</h3>
        </>
    )
}

export default Day