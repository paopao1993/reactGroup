import "./index.scss";
import React from "react";
import {BorderBg} from '../../borderLine/index';
import BasePanel from "../../../base_panel";
export default class PayPercent extends React.Component {
    render() {
        let content=(
            <div className='right-percent pay-percent'>
            <div className='right-icon'>
                <div className='target-icon'></div>
            </div>
            <div className='right-content'>
                <div className='top'>
                    <div className='title'>付费网点占比：</div>
                    <div><span  className='num'>100</span>%</div>

                </div>
                <div className='bottom'>
                    <div className='title'>新增付费网点数：</div>
                    <div><span className='num'>107</span>个</div>
                </div>
            </div>
        </div>
        )
        return (
            <BasePanel content={content} className='panel-right' />
        )
    }
}