import React from "react";
import {Card, List, Space} from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import {getSectList} from "./sectservice";

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
class Sect extends React.Component{

    constructor() {
        super();
        this.state = {
            dataSource: listData
            , current: 1
            , pageSize: 10
            , total: 10
        }
    }

    UNSAFE_componentWillMount() {
        getSectList({
            current: this.state.current
            , pageSize: this.state.pageSize
        }).then(result => {
            this.setState(result);
        })
    }

    render() {
        const {dataSource, current, pageSize, total} = this.state;
        return (
            <div className={"sect-main"}>
                <Card className={"sect-items"} title="Sect List">
                    <List
                        bordered
                        className={"sect-list"}
                        dataSource={dataSource}
                        itemLayout="vertical"
                        pagination={{
                            pageSize: pageSize
                            , onChange: (page, pageSize)=>{
                                this.setState({current: page, pageSize: pageSize})
                                getSectList({
                                    current: page
                                    , pageSize: pageSize
                                }).then(result => {
                                    this.setState(result);
                                })
                            }
                        }}
                        renderItem={ item => {
                            return (
                                <List.Item
                                    key={item.title}
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
                                        // avatar={"head image"}
                                        description={item.sectType}
                                        title={item.sectName}
                                    />
                                    {item.sectAttribute}
                                    <br/>
                                    {item.sectDescription}
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

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://ant.design',
        sectName: `XXX-XXX-XXX-${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        sectType:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        sectAttribute:
            'Ant Design',
        sectDescription:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.' +
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}