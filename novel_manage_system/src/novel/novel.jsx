import React from "react";
import {Card, Descriptions} from 'antd';
import './novel.css';

class Novel extends React.Component{
    render() {
        return (
            <div className={"novel-main"}>
                <Card className={"novel-items"} title="Novel List">
                    {
                         items.map((item, index)=>{
                            return (
                                <Card className={"novel-item"} type="inner" title={item.novelName}>
                                    <Descriptions column={1} className={"novel-content"}>
                                        <Descriptions.Item label={"Type"}>{item.novelType}</Descriptions.Item>
                                        <Descriptions.Item label={"Author"}>{item.author}</Descriptions.Item>
                                        <Descriptions.Item label={"publishDate"}>{item.publishDate}</Descriptions.Item>
                                        <Descriptions.Item label={"description"}>{item.description}</Descriptions.Item>
                                    </Descriptions>
                                </Card>
                            )
                        })
                    }

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
        , publishDate: "2009-09-20"
        , author: "XXX-XXX"
        , description: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
    , {
        novelName: "XXX-XXX-XXX"
        , novelType: "XXX-XXX"
        , publishDate: "2022-05-12"
        , author: "XXX-XXX"
        , description: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
    , {
        novelName: "XXX-XXX-XXX"
        , novelType: "XXX-XXX"
        , publishDate: "2022-05-12"
        , author: "XXX-XXX"
        , description: "XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX" +
            "-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX-XXX"
    }
]