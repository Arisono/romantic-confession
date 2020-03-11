import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import HeaderPage from "./HeaderPage";
import FooterPage from "./FooterPage";
import ContentPage from "./ContentPage";
import ReactAplayer from 'react-aplayer';
import LoveTimes from "../confession/LoveTimes";
import SpecialEffects from "../confession/SpecialEffects";
/**
 * Created by Think on 12:13.
 */
class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'HomePage'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
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
        return <div className="container-special">

            {/*头部*/}
            <Route  component={HeaderPage} />
            {/*内容*/}

                <Route className="col-md-12" exact path={`${this.props.match.url}/`} component={LoveTimes} />
                <Route className="col-md-12"  path={`${this.props.match.url}/2020-02-14.html`} component={SpecialEffects} />


            {/*底部*/}
            <Route component={FooterPage} />
            {/*音乐播放器*/}
            <ReactAplayer
                {...props}
                onInit={this.onInit}
                onPlay={this.onPlay}
                onPause={this.onPause}
            />
        </div>
    }
}

export  default HomePage;