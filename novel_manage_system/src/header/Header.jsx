import React from "react";
import {Menu, Dropdown, Space, Button} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items}
    }

    render() {
        const option = this.state.items ? this.state.items : items;
        return (
            <div className="header">
                <div className={"header-title"}>Novel Manage System</div>
                <div className={"header-items"}>
                    {option.map((item, index) => {
                        const menu = <Menu items={item.children}/>;
                        return (
                            <div className={"item-"+index+" header-item"} key={index}>
                                <Dropdown overlay={menu}>
                                    <Button onClick={e => e.preventDefault()}>
                                        <Space>
                                            {item.label}
                                            <DownOutlined/>
                                        </Space>
                                    </Button>
                                </Dropdown>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Header;

const items = [
    {
        label: "Hover me",
        children: [
            {
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                        1st menu item
                    </a>
                )
                , danger: false
                , disabled: false
                , icon: <></>
                , title: "title"
            },
            {
                danger: true,
                label: 'a danger item'
                , disabled: false
                , icon: <></>
                , title: "title"
            },
        ]
        , key: '1'
    }
];