import { IDaySingle } from "@/interfaces"
import { FC } from "react"


const Day:FC<IDaySingle> = ({day, dataMon}) => {

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
    
    const getNumber = () => {
        let monday = dataMon.dayMon
        let startDay = dataMon.dayWeekStart
        let EndDay = dataMon.dayWeekEnd
        let data = Number(startDay[0]) + Number(day._N) - 1
        if(monday == startDay){
            if(startDay[1] === EndDay[1]){
                data = Number(startDay[0]) + Number(day._N) - 1
            }
        }
        return data
    }
    
    return(
        <>
            {day._N != 'undefined' ? (
                <h3><span>{String(getNumber())}</span><span>, </span>{getDay(day._N)}</h3>
            ) : (
                <h2>Отдыхаем</h2>
            )}
            
        </>
    )
}

export default Day