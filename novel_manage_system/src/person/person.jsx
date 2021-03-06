import React from "react";
import {Card, Descriptions, Image, Pagination} from 'antd';
import './person.css';
import {getPersonList} from "./server";

class Person extends React.Component{
    constructor() {
        super();
        this.state = {
            dataSource: []
            , current: 1
            , pageSize: 10
            , total: 10
        }
    }

    componentWillMount() {
        getPersonList({current: this.state.current, pageSize: this.state.pageSize}).then(
            result => {
                this.setState(result);
            }
        )
    }

    getPersonList(){
        this.setState({dataSource: getPersonList()})
    }
    render() {
        const { total, dataSource, current, pageSize} = this.state
        return (
            <div className={"person-main"}>
                <Card className={"person-items"} title="Person List">
                    {
                        dataSource.map((item, index)=>{
                            return (
                                <Card className={"person-item"} type="inner" title={item.personName} key={index}>
                                    <Descriptions column={1} className={"person-content"}>
                                        <Descriptions.Item label={"personAttribute"}>{item.personAttribute}</Descriptions.Item>
                                        <Descriptions.Item label={"age"}>{item.age}</Descriptions.Item>
                                        <Descriptions.Item label={"personDescription"}>{item.personDescription}</Descriptions.Item>
                                    </Descriptions>
                                    <Image className={"person-image"}
                                           alt={"cover"}
                                           src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                                           preview={{
                                               src: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                           }}
                                    />
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
                        showTotal={total => `??? ${total} ???`}
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
export default Person;