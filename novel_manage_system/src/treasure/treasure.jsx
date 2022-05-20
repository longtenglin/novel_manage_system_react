import React from "react";
import {Card, Descriptions, Pagination} from 'antd';
import './treasure.jsx.css';
import {getTreasureList} from "./treasureService";

class Treasure extends React.Component{
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
        getTreasureList({
            current: this.state.current
            , pageSize: this.state.pageSize
        }).then(result => {
            this.setState(result)
        })
    }

    render() {
        const { dataSource, current, pageSize, total} = this.state;
        return (
            <div className={"treasure-main"}>
                <Card className={"treasure-items"} title="Treasure List">
                    {
                        dataSource.map((item, index)=>{
                            return (
                                <Card className={"treasure-item"} type="inner" title={item.treasureName}>
                                    <Descriptions column={1} className={"treasure-content"}>
                                        <Descriptions.Item label={"Type"}>{item.treasureType}</Descriptions.Item>
                                        <Descriptions.Item label={"Attribute"}>{item.treasureAttribute}</Descriptions.Item>
                                        <Descriptions.Item label={"Description"}>{item.treasureDescription}</Descriptions.Item>
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
                            getTreasureList({
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

export default Treasure;

const items = [
    {
        treasureName: "XXX-XXX-XXX"
        , treasureType: "XXX-XXX"
        , treasureAttribute: "XXX-XXX"
        , treasureDescription: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
]