import React from 'react';
import "./LoveTimes.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import CountTimeDown from "../common/CountTimeDown";
import ReactAplayer from 'react-aplayer';

/**
 * Created by Think on 13:39.
 */
class LoveTimes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [{
                year: "2020",
                title: "致亲爱的，女神节快乐",
                description: ["03.07 爱情小屋时间轴功能发布上线",
                    "03.06 发布美丽的三维立体爱心鲜花致女神 ",
                    "03.05 收到了亲爱的买的护肤化妆品&零食"]
            }, {
                year: "2020",
                title: "疫情下的鼠年春节",
                description: ["2.14 爱情小屋上线。见证我们的爱情",
                    "1.13 你给我买了ThinkPad T480S，感谢亲爱的",
                    ""]

            }, {
                year: "2019",
                title: "曲折中柳暗花明",
                description: ["9.13  九江一天游，中秋节第一次去我家见我父母", "", ""]
            }, {
                year: "2018",
                title: "----",
                description: ["", "", ""]
            }, {
                year: "2017",
                title: "----",
                description: ["", "", ""]
            }, {
                year: "2017",
                title: "遇见你是我的幸运",
                description: ["09.13 我们第一次相见",
                    "10.31 万圣夜正式向你表白,我们成为了恋人",
                    "11.03 第一次深深亲吻"]
            }]
        };
    }

    onPlay = () => {
        console.log('on play');
    };

    onPause = () => {
        console.log('on pause');
    };

    onInit = ap => {
        this.ap = ap;
    };

    componentDidMount() {
    }

    render() {
        const props = {
            theme: '#FADFA3',
            fixed: true,
            mini: true,
            autoplay: true,
            mutex: true,
            listFolded: false,
            lrcType: 3,
            audio: [
                {
                    name: '我们结婚吧',
                    artist: '菟菟彩',
                    url: '/music/20200307.mp3',
                    cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951162921443452&auth=a87a60a34d313cec6a3b6749504392f8d941bc417a5e283b6b7bb90496258c7a',
                    lrc: '/music/lrc/20200307.lrc',

                }, {
                    name: "小永远",
                    artist: "何洁",
                    url: "/music/20200214.mp3",
                    cover: "http://p2.music.126.net/1-Z8bNKy6Cw_MRM3MVMmQw==/109951163200242736.jpg?param=300x300",
                    lrc: "/music/lrc/20200214.lrc",
                    theme: '#ebd0c2'
                }
            ]
        };

        return <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/*<audio
                        src="http://love.yundashi168.com/music/20200307.mp3"
                        autoPlay="true"
                        loop="true">
                    </audio>*/}

                    <div className="main-timeline">
                        {this.state.persons.map((item, index) => {
                            return <div className="timeline">
                                <div className="timeline-icon"><span className="year">{item.year}</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">{item.title}</h3>
                                    <p className="description">
                                        {item.description[0]}<br/>{item.description[1]}
                                        <br/> {item.description[2]}<br/>
                                    </p>
                                </div>
                            </div>

                        })}

                    </div>
                </div>
                <div className="col-md-12">
                    <div className="aplayer" data-id="2663438812" data-server="netease" data-type="playlist"
                         data-fixed="true" data-order="random" data-autoplay="true"/>
                </div>
                <div className="col-md-12">


                </div>
            </div>
        </div>

    }
}

export default LoveTimes;