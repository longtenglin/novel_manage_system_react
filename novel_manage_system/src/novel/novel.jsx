import React from "react";
import {Card, Descriptions} from 'antd';
import './novel.css';

class Novel extends React.Component{
    render() {
        return (
            <div className={"novel-main"}>
                <Card className={"novel-items"} title="Novel List">
                    <Card className={"novel-item"} type="inner" title="Inner Card title">
                        <Descriptions column={1} className={"novel-content"}>
                            <Descriptions.Item label={"Type"}>1111111</Descriptions.Item>
                            <Descriptions.Item label={"Description"}>{description}</Descriptions.Item>
                            <Descriptions.Item label={"Description"}>{description}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                    <Card className={"novel-item"} type="inner" title="Inner Card title">
                        <Descriptions column={1} className={"novel-content"}>
                            <Descriptions.Item label={"Type"}>1111111</Descriptions.Item>
                            <Descriptions.Item label={"Description"}>{description}</Descriptions.Item>
                            <Descriptions.Item label={"Description"}>{description}</Descriptions.Item>
                        </Descriptions>
                    </Card>
                </Card>
            </div>
        )
    }
}
export default Novel;

const description = "2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"