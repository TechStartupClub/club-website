import { faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Info, DateTime, Interval } from "luxon"
import { useState } from 'react';

const Calendar = () => {
    const today = DateTime.local();
    const [firstDayOfActiveMonth, setFirstDayOfActiveMonth] = useState(
        today.startOf("month")
    )
    const weekDays = Info.weekdays("short");
    const daysOfMonth = Interval.fromDateTimes(
        firstDayOfActiveMonth.startOf("week"),
        firstDayOfActiveMonth.endOf("month").endOf("week")
    )
     .splitBy({ day : 1 })
     .map((day) => day.start);

    const goToPreviousMonth = () => {
        setFirstDayOfActiveMonth(firstDayOfActiveMonth.minus({ month : 1 }));
    }

    const goToToday = () => {
        setFirstDayOfActiveMonth(today.startOf("month"));
    }

    const goToNextMonth = () => {
        setFirstDayOfActiveMonth(firstDayOfActiveMonth.plus({ month : 1 }));
    }


    return (
        <div className="calendar-container">
            <div className="top-banner">
                <h1>{firstDayOfActiveMonth.toLocaleString({month : "short", year : "2-digit"})}</h1>
                <div className='top-banner-control'>
                    <button onClick={() => {goToPreviousMonth()}}><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <button onClick={() => {goToToday()}}>Today</button>
                    <button onClick={() => {goToNextMonth()}}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
            <div className="days-of-week">
                {weekDays.map((weekDay, weekDaysIndex) => (
                    <div key={weekDaysIndex}>{weekDay}</div>
                ))}
            </div>
            <div className='calendar-grid'>
                {daysOfMonth.map((days, daysIndex) => {
                    if (days.hasSame(today, "day")) {
                        return (
                            <div className="current-day" key={daysIndex}>
                                {days.day}
                                <p>Current</p>
                            </div>
                        );
                    }
                    else if (days.hasSame(today, "day") && ((days.weekday === 1) || (days.weekday === 4))) {
                        return (
                            <div className="current-day class-day" key={daysIndex}>
                                {days.day}
                                <p>
                                    {days.weekday === 1 ? 'TPS 201 12:30-1:30' : 'DOU 260 12:30-1:30'}
                                </p>
                                <p>
                                    In-person and virtually
                                </p>   
                            </div>
                        );
                    }  
                    else if ((days.weekday === 1) || (days.weekday === 4)) {
                        return (
                            <div className="class-day" key={daysIndex}>
                                {days.day}
                                <p>
                                    {days.weekday === 1 ? 'TPS 201 12:30-1:30' : 'DOU 260 12:30-1:30'}
                                </p>
                                <p>
                                    In-person and virtually
                                </p>                        
                            </div>  
                        )
                    }                  
                    else {
                        return (
                            <div key={daysIndex}>{days.day}</div>
                        )
                    }   
                })}
            </div>
        </div>
    )
}

export default Calendar