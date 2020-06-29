import React from 'react'

function CurrentDay() {

    const today = new Date()
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    return (<div className="date">
    <h1>{currentMonth} / {currentDay} / {currentYear}</h1>
    </div>)
}

export default CurrentDay;