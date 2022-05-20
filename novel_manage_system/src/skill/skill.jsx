import React from "react";
import {Card, Descriptions, Pagination} from 'antd';
import './skill.css';
import { getSkillList } from "./skillservice";

class Skill extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: items
            , current: 1
            , pageSize: 10
            , total: 1
        }
    }

    UNSAFE_componentWillMount() {
        getSkillList({
            current: this.state.current
            , pageSize: this.state.pageSize
        }).then(result => {
            this.setState(result)
        })
    }

    render() {
        const { dataSource, current, pageSize, total} = this.state;
        return (
            <div className={"road-main"}>
                <Card className={"road-items"} title="Road List">
                    {
                        dataSource.map((item, index)=>{
                            return (
                                <Card className={"road-item"} type="inner" title={item.roadName}>
                                    <Descriptions column={1} className={"road-content"}>
                                        <Descriptions.Item label={"Type"}>{item.roadType}</Descriptions.Item>
                                        <Descriptions.Item label={"Attribute"}>{item.roadAttribute}</Descriptions.Item>
                                        <Descriptions.Item label={"Description"}>{item.roadDescription}</Descriptions.Item>
                                    </Descriptions>
                                </Card>
                            )
                        })
                    }
                    <Pagination
                        className={"person-pagination"}
                        total={total}
                        showSizeChanger
                        showQuickJumper
                        current={current}
                        pageSize={pageSize}
                        showTotal={total => `共 ${total} 条`}
                        onChange={(page, pageSize)=>{
                            this.setState({current: page, pageSize: pageSize})
                            getSkillList({
                                current: page
                                , pageSize: pageSize
                            }).then(result => {
                                this.setState(result)
                            })
                        }}
                    />
                </Card>
            </div>
        )
    }
}

export default Skill;

const items = [
    {
        roadName: "XXX-XXX-XXX"
        , roadType: "XXX-XXX"
        , roadAttribute: "XXX-XXX"
        , roadDescription: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
]