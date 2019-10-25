import "./index.scss";
import React from "react";
import BasePanel from './../../../base_panel/index';

export default class Target extends React.Component {
    render() {
        let content=(
            <div className='target-content clearfix'>
            <div className='right-icon'>
                <div className='target-icon'></div>
            </div>
            <div className='right-content'>
                <div className='top'>
                    <div className='title'>20万人口以上市场:</div>
                    <div><span className='num'>100</span>%</div>
                </div>
                <div className='bottom'>
                    <div className='title'>新增经销商：</div>
                    <div><span className='num'>17</span>个</div>
                </div>
            </div>
        </div>
        )
        return (
            <BasePanel style={{height:'auto'}} title='策略与目标：' content={content}/>
        )
    }
}