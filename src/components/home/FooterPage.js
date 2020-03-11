import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FooterPage.css'
import CountTimeDown from "../common/CountTimeDown";
/**
 * Created by Think on 14:02.
 */
class FooterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'FooterPage'
        };
    }
    
    
    componentDidMount(){
        
    }
   
    render(){
        return <div className="container-special footer">
            <div className="row">
                <div className="col-md-12">
                    {/*页脚站点信息*/}
                    <div className="foot-site-info flex-center-column">
                        <div className="footer-one">
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">Powered</span><span
                                    className="badge-value bg-blue">React</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">Hosted</span><span
                                    className="badge-value bg-brightgreen">阿里云</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">DNR</span><span
                                    className="badge-value bg-brightgreen">阿里云域名</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">CDN</span><span
                                    className="badge-value bg-blueviolet">又拍云</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">Link</span><span
                                    className="badge-value bg-firebrick">996.ICU</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">UV</span><span
                                    className="badge-value bg-orange">未统计</span></a>
                            </div>
                            <div className="github-badge">
                                <a style={{color: "#fff"}} rel="license" href="https://hexo.io/" target="_blank"
                                   title="由 Hexo 强力驱动">
                                    <span className="badge-subject">PV</span><span
                                    className="badge-value bg-brightgreen">未统计</span></a>
                            </div>
                        </div>
                      <div className="footer-two flex-center-row">
                          2019 - 2020 爱情小屋  |   鄂ICP备19003281号-5  |  萌ICP备20203344号
                          | 我们已经相爱了 <CountTimeDown/>  |  站点地图  |

                      </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export  default FooterPage;