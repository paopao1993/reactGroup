import "./index.scss";
import React from "react";
import {BorderBg} from '../../borderLine/index';
import BasePanel from "../../../base_panel";
export default class CoverPercent extends React.Component {
    render() {
        let content=(
            <div className='right-percent cover-percent'>
            <div className='right-icon'>
                <div className='target-icon'></div>
            </div>
            <div className='right-content'>
                <div className='top'>
                    <div className='title'>售点覆盖率：</div>
                    <div><span  className='num'>40</span>%</div>

                </div>
                <div className='bottom'>
                    <div className='title'>新增服务网点数：</div>
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