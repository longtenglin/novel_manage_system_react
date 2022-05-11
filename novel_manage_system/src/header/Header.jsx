import React from "react";
import type { MenuProps } from 'antd';
import {Menu} from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './header.css';
import {Link} from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: props.items}
    }

    render() {
        // const option = this.state.items ? this.state.items : items;
        const onClick: MenuProps['onClick'] = e => {
            console.log('click ', e);
            this.setState({current: e.key});
        };
        return (
            <div className="header">
                <div className={"header-title"}>Novel Manage System</div>
                <div className={"header-items"}>
                    <Menu onClick={onClick} selectedKeys={[this.state.current]} mode="horizontal" items={items} />
                </div>
            </div>
        );
    }
}

export default Header;

const items: MenuProps['items'] = [
    {
        label: <Link to={"/novel"}>Novel</Link>,
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Navigation Two',
        key: 'app',
        icon: <AppstoreOutlined />,
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];