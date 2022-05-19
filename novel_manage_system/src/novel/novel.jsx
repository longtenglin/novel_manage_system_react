import React from "react";
import {Card, Descriptions, Pagination} from 'antd';
import './novel.css';
import {getNovelList} from "./novelservice";

class Novel extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: []
            , current: 1
            , pageSize: 10
            , total: 10
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
                        onShowSizeChange={(current, size)=>{
                            console.log(current);
                            console.log(size);
                        }}
                        onChange={(page, pageSize)=>{
                            console.log(page)
                            console.log(pageSize)
                        }}
                    />
                </Card>
            </div>
        )
    }
}
export default Novel;