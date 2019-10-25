import "./index.scss";
import {BorderBg} from '../../borderLine';
import React from "react";
import BasePanel from './../../../base_panel/index';

export default class businessData extends React.Component {

    render() {
        let content=(
            <div className='data-content'>
            <div className='item-content item-col1'>
                <div className='col-left'>
                    <span className='item-title col1-title'>分子公司数：</span>
                    <span className='right-num'>
                        <span className='item-num'>38</span>
                        个
                    </span>
                </div>
                <div className='col-right col1-right'>
                    <span className='item-title right-title'>RBU数：</span>
                    <span className='right-num'>
                        <span className='item-num' >200</span>
                        个
                    </span>
                </div>
            </div>
            <div className='item-content item-col1'>
                <div className='col-left'>
                    <span className='item-title col1-title'>城市营业单位：</span>
                    <span className='right-num'>
                        <span className='item-num'>38</span>
                        个
                    </span>
                </div>
                <div className='col-right col1-right'>
                    <span className='item-title right-title'>区域经销商数：</span>
                    <span className='right-num'>
                        <span className='item-num' >200</span>
                        个
                    </span>
                </div>
            </div>
            <div className='item-content item-col1'>
                <div className='col-left'>
                    <span className='item-title col3-title'>累计销售额：</span>
                    <span className='right-num col3-num'>
                        <span className='item-num'>2300</span>
                        万元
                    </span>
                </div>
                <div className='col-right col1-right'>
                    <span className='item-title right-title'>MN人均消费额：</span>
                    <span className='right-num'>
                        <span className='item-num' >200</span>
                        个
                    </span>
                </div>
            </div>
       </div>
    )
        return (
            <BasePanel className='business-data' title='业务数据：' content={content}/>
        )
    }
}