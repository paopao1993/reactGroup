import "./index.scss";
import React from "react";
import {BorderBg} from '../../borderLine';
import { MV } from "mv";
import util from '../../../../common/util'
import BasePanel from "../../../base_panel";
const request=new MV.Query()
export default class MarketFeatures extends React.Component {
    state={
        featureData:{},
    }
    componentWillMount(){
        
        let sfields=["G_A100001","DAY_POP","CONSU_P","GDP_P"].join(",")
        let whereCause=`"OWNER_PROV"='130000'`
        request.aggregateQuery(1,"SUM",sfields,null, whereCause).then(res=>{
            let data=res.data[0],obj={}
            for(let key in data){
               obj[key]=util.numberFormat(data[key],'zh',2)
            }
            this.setState({
                featureData:obj,
            })
        })

    }
    render() {
        const {G_A100001={},DAY_POP={},CONSU_P={},GDP_P={}}=this.state.featureData
        let content=(
            <div className='features-content'>
            <div className='features-item'>
                <div className='item-title'>环境人口：</div>
                <div className='item-num'><span>{G_A100001.value}</span>{G_A100001.unit}人</div>
            </div>
            <div className='features-item'>
                <div className='item-title'>人口活动指数：</div>
                <div className='item-num'><span>{DAY_POP.value}</span>{DAY_POP.unit}</div>
            </div>
            <div className='features-item'>
                <div className='item-title'>人均GDP：</div>
                <div className='item-num'><span>{GDP_P.value}</span>{GDP_P.unit}元</div>
            </div>
            <div className='features-item'>
                <div className='item-title'>人均消费支出：</div>
                <div className='item-num'><span>{CONSU_P.value}</span>{CONSU_P.unit}元</div>
            </div>
        </div>
        )
        return (
            <BasePanel content={content} className='market-features' title='市场特征' />
        )
    }
}