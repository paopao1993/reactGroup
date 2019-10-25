import "./index.scss";
import React from "react";
import {BorderBg} from '../../borderLine/index';
import BasePanel from "../../../base_panel";
export default class DotPercent extends React.Component {
    render() {
        let content=(
            <div className='right-percent dot-percent'>
            <div className='right-icon'>
                <div className='target-icon'></div>
            </div>
            <div className='right-content'>
                <div className='top'>
                    <div className='title'>人均服务网点数：</div>
                    <div><span  className='num'>100</span>%</div>

                </div>
                <div className='bottom'>
                    <div className='title'>增加业务人员数：</div>
                    <div><span className='num'>17</span>个</div>
                </div>
            </div>
        </div>
        )
        return (
            <BasePanel content={content} className='panel-right'/>
        )
    }
}