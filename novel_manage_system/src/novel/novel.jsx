import React from "react";
import {Card, Descriptions, Pagination} from 'antd';
import './novel.css';
import {getNovelList} from "./novelservice";

class Novel extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: items
            , current: 1
            , pageSize: 10
            , total: 3
        }
    }

    UNSAFE_componentWillMount() {
        getNovelList({
            current: this.state.current
            , pageSize: this.state.pageSize
        }).then(result => {
            this.setState(result)
        })
    }

    render() {
        const { dataSource, current, pageSize, total} = this.state;
        return (
            <div className={"novel-main"}>
                <Card className={"novel-items"} title="Novel List">
                    {
                         dataSource.map((item, index)=>{
                            return (
                                <Card className={"novel-item"} type="inner" title={item.novelName}>
                                    <Descriptions column={1} className={"novel-content"}>
                                        <Descriptions.Item label={"Type"}>{item.novelType}</Descriptions.Item>
                                        <Descriptions.Item label={"Author"}>{item.novelAuthor}</Descriptions.Item>
                                        <Descriptions.Item label={"publishDate"}>{item.novelPubDate}</Descriptions.Item>
                                        <Descriptions.Item label={"description"}>{item.novelDescription}</Descriptions.Item>
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
                            getNovelList({
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
export default Novel;

const items = [
    {
        novelName: "XXX-XXX-XXX"
        , novelType: "XXX-XXX"
        , novelPubDate: "2009-09-20"
        , novelAuthor: "XXX-XXX"
        , novelDescription: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
    , {
        novelName: "XXX-XXX-XXX"
        , novelType: "XXX-XXX"
        , novelPubDate: "2022-05-12"
        , novelAuthor: "XXX-XXX"
        , novelDescription: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
    , {
        novelName: "XXX-XXX-XXX"
        , novelType: "XXX-XXX"
        , novelPubDate: "2022-05-12"
        , novelAuthor: "XXX-XXX"
        , novelDescription: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
]