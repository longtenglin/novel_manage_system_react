import React from "react";
import {Card, List, Space} from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
class Sect extends React.Component{
    render() {
        return (
            <div className={"novel-main"}>
                <Card className={"novel-items"} title="Novel List">
                    <List
                        bordered
                        className={"novel-list"}
                        dataSource={data}
                        itemLayout="vertical"
                        renderItem={ item => {
                            return (
                                <List.Item
                                    key={item}
                                    actions={[
                                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                    ]}
                                    extra={
                                        <img
                                            width={272}
                                            alt="logo"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                        />
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={"asd"}
                                        description={"List item meta description"}
                                        title={"List Item Meta Title"}
                                    />
                                    List Item Contents
                                </List.Item>
                            )
                        }}
                    />
                </Card>
            </div>
        )
    }
}
export default Sect;

const data = [
    "123",
    "456"
]