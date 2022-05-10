import React from "react";
import { Card } from 'antd';
import './footer.css'

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {items: props.items}
    }

    render() {
        const items = this.state.items?this.state.items: option;
        return (
            <div className="footer">
                <div className={"footer-main"}>
                    {
                        items.map((item, index) => {
                            return (
                                <Card title={item.title} bordered={false} className={"footer-contents"} key={index}>
                                    {
                                        (item.contents?item.contents:[]).map((content, index) => {
                                            return (
                                                <p key={index}>{content.name}</p>
                                            )
                                        })
                                    }
                                </Card>
                            )
                        })
                    }
                </div>
                <div className={"footer-bottom"}>
                    Copyright © 2013-2022 novel_manage_system All Rights Reserved. 备案号：xxx-xxx-xxx-xxx
                </div>
            </div>
        )
    }
}

export default Footer;

const option = [
    {
        title: "相关资源"
        , contents: [
            {
                icon: ""
                , name: "开源阅读",
            }
            , {
                icon: ""
                , name: "开源写作"
            }
            , {
                icon: ""
                , name: "共享阅读"
            }
        ]
    }
    , {
        title: "社区"
        , contents: [
            {
                icon: ""
                , name: "WeChat"
            }
            , {
                icon: ""
                , name: "QQ"
            }
            , {
                icon: ""
                , name: "开源写作专栏"
            }
            , {
                icon: ""
                , name: "加入我们"
            }
        ]
    }
    , {
        title: "帮助"
        , contents: [
            {
                icon: ""
                , name: "GitHub"
            }
            , {
                icon: ""
                , name: "更新日志"
            }
            , {
                icon: "报告Bug"
                , name: "报告Bug"
            }
            , {
                icon:""
                , name: "常见问题"
            }
        ]
    }
    , {
        title: "更多产品"
        , contents: [
            {
                icon: ""
                , name: "开源写作 App ( 安卓版 )"
            }
        ]
    }
]
