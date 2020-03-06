import React from 'react';
import {GetDateCount} from "../../utils/Utils"

class CountTimeDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }

    componentDidMount() {
        setInterval(() => {
            let timeArray = GetDateCount("2017-09-13 12:30:00");
            this.setState({
                days: timeArray[0],
                hours: timeArray[1],
                minutes: [timeArray[2]],
                seconds: timeArray[3],
            })
        }, 1000);
    }

    render() {
        return <div style={{display: "inline"}}>
            <span className="span-size-20 span-strong">{this.state.days}</span>天
            <span className="span-size-20 span-strong">{this.state.hours}</span>时
            <span className="span-size-20 span-strong">{this.state.minutes}</span>分
            <span className="span-size-20 span-strong">{this.state.seconds}</span>秒
        </div>
    }
}

export default CountTimeDown;