import React from 'react';
import "./SpecialEffects.css"
import bg from "../../utils/images/bg.jpg"
import {typewriter} from "../../utils/Utils"
import CountTimeDown from "../common/CountTimeDown";
class SpecialEffects extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'SpecialEffects'
        };
    }


    componentDidMount(){
        this.startAnimation();
        document.getElementById("code").typewriter();
    }

    startAnimation(){
        let canvas = document.querySelector("canvas"),
            ctx = canvas.getContext("2d");

        let  ww,wh;

        function onResize(){
            ww = canvas.width = window.innerWidth;
            wh = canvas.height = window.innerHeight;
        }

        ctx.strokeStyle = "red";
        ctx.shadowBlur = 25;
        ctx.shadowColor = "hsla(0, 100%, 60%,0.5)";

        let  precision = 100;
        let  hearts = [];
        let  mouseMoved = false;
        function onMove(e){
            mouseMoved = true;
            if(e.type === "touchmove"){
                hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
                hearts.push(new Heart(e.touches[0].clientX, e.touches[0].clientY));
            }
            else{
                hearts.push(new Heart(e.clientX, e.clientY));
                hearts.push(new Heart(e.clientX, e.clientY));
            }
        }

        let  Heart = function(x,y){
            this.x = x || Math.random()*ww;
            this.y = y || Math.random()*wh;
            this.size = Math.random()*2 + 1;
            this.shadowBlur = Math.random() * 10;
            this.speedX = (Math.random()+0.2-0.6) * 8;
            this.speedY = (Math.random()+0.2-0.6) * 8;
            this.speedSize = Math.random()*0.05 + 0.01;
            this.opacity = 1;
            this.vertices = [];
            for (let  i = 0; i < precision; i++) {
                let  step = (i / precision - 0.5) * (Math.PI * 2);
                let  vector = {
                    x : (15 * Math.pow(Math.sin(step), 3)),
                    y : -(13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step))
                }
                this.vertices.push(vector);
            }
        }

        Heart.prototype.draw = function(){
            this.size -= this.speedSize;
            this.x += this.speedX;
            this.y += this.speedY;
            ctx.save();
            ctx.translate(-1000,this.y);
            ctx.scale(this.size, this.size);
            ctx.beginPath();
            for (let  i = 0; i < precision; i++) {
                let  vector = this.vertices[i];
                ctx.lineTo(vector.x, vector.y);
            }
            ctx.globalAlpha = this.size;
            ctx.shadowBlur = Math.round((3 - this.size) * 10);
            ctx.shadowColor = "hsla(0, 100%, 60%,0.5)";
            ctx.shadowOffsetX = this.x + 1000;
            ctx.globalCompositeOperation = "screen"
            ctx.closePath();
            ctx.fill()
            ctx.restore();
        };


        function render(a){
            requestAnimationFrame(render);

            hearts.push(new Heart())
            ctx.clearRect(0,0,ww,wh);
            for (let  i = 0; i < hearts.length; i++) {
                hearts[i].draw();
                if(hearts[i].size <= 0){
                    hearts.splice(i,1);
                    i--;
                }
            }
        }



        onResize();
        window.addEventListener("mousemove", onMove);
        window.addEventListener("touchmove", onMove);
        window.addEventListener("resize", onResize);
        requestAnimationFrame(render);
    }

    render(){
        return <div className="container-special">

            <img id="bg" src={bg}/>
            <canvas width="1422" height="642"></canvas>
            <div  className="mb-box">
                <div  className="bb">
                    <h2>我爱你李朋燕</h2>
                    <div className="bb_text">
                        <div id="code">
                            如果你问我到底有多爱你，对不起，我说不出来，我只知道想你已经成为了我每天都要做得事情，每时每刻，何时何地，我的脑海里一直有你的影子。世间最美丽的，是你的笑颜；最迷人的，是你的身影；最好听的，是你的声音；最动人的，是你的眼神。
                        </div>
                    </div>
                    <div className="bb_myname">— 刘杰<br/></div>
                    <div  className="bb_myDate">
                        <span className="span-white">2020 </span>
                        年
                        <span className="span-white">2</span>
                        月
                        <span className="span-white">14</span>
                        日
                        <span className="span-white">  情人节</span>
                        专属</div>
                    <div className="bb_loveTime">我们在一起相爱：
                        <CountTimeDown />
                    </div>
                </div>
            </div>






        </div>
    }
}

export  default SpecialEffects;