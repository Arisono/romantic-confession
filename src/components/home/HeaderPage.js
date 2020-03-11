import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HeaderPage.css'
import   '../../utils/js/google'
import $ from 'jquery'
import {Link} from "react-router-dom";
/**
 * Created by Think on 12:40.
 */
class HeaderPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'HeaderPage'
        };
    }


    componentDidMount() {
        {$(document).ready(function () {
            $().maps();
        });
        }
    }

    render() {

        return <div className="site-header">
            <div className="content">
                <ul className="venus-menu">
                    <li className="active">
                        <a href="/">
                            <i className="icon-home"></i>首页
                        </a>
                    </li>

                    <li><a href="#"><i className="icon-picture "></i>相册</a>
                        <ul>
                            <li><a href="#">魔幻相册</a>
                                <ul>
                                    <li><a href="#">心属相册</a>
                                        <ul>
                                            <li><a href="#">爱情相册</a>
                                                <ul>
                                                    <li><a href="#">唯美相册</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#"><i className="icon-heart"></i>表白</a>
                        <p className="header-page-p"></p>
                        <ul>
                            <li><a href="/love/2020-02-14.html">情人节</a></li>
                            <li><a href="/2020-03-07.html">女神节</a></li>
                        </ul>
                    </li>

                    <li><a href="#"><i className="icon-time"></i>时间轴</a>
                        <p className="header-page-p"></p>
                    </li>

                    <li><a href="#"><i className="icon-tasks"></i>100件事</a>
                        <p className="header-page-p"></p>
                    </li>

                    <li><a href="#"><i className="icon-link"></i>友人帐</a>
                        <p className="header-page-p"></p>
                    </li>

                    <li><a href="#"><i className="icon-edit"></i>留言板</a>
                        <p className="header-page-p"></p>
                    </li>


                    <li><a href="#"><i className="icon-envelope-alt"></i>关于</a>
                        <p className="header-page-p"></p>
                    </li>
                </ul>

            </div>
            <div className="header-page">
            </div>
        </div>
    }
}

export default HeaderPage;