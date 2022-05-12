import React from "react";
import type { MenuProps } from 'antd';
import {Menu} from 'antd';
import { ContainerOutlined, AppstoreOutlined, SettingOutlined, OrderedListOutlined } from '@ant-design/icons';
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
                <div className={"header-title"}><Link to={"/"}>Novel Manage System</Link></div>
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
        icon: <ContainerOutlined />,
    },
    {
        label: 'Ranking List',
        key: 'app',
        icon: <OrderedListOutlined />,
        disabled: true,
    },
    {
        label: <Link to={"/person"}>PERSON</Link>,
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'PERSON',
                children: [
                    {
                        label: <Link to={"/person"}>PERSON</Link>,
                        key: 'setting:1',
                    },
                    {
                        label: <Link to={"/person"}>PERSON</Link>,
                        key: 'setting:2',
                    },
                ],
            }
        ],
    }
    , {
        label: <Link to={"/road"}>ROAD</Link>
        , key: 'road'
        , icon: <AppstoreOutlined />
    }
    , {
        label: <Link to={"/skill"}>SKILL</Link>
        , key: 'skill'
        , icon: <AppstoreOutlined />
    }
    , {
        label: <Link to={"/sect"}>SECT</Link>
        , key: 'sect'
        , icon: <AppstoreOutlined />
    }
    , {
        label: <Link to={"/treasure"}>TREASURE</Link>
        , key: 'treasure'
        , icon: <AppstoreOutlined />
    }
    , {
        label: <Link to={"/weapons"}>WEAPONS</Link>
        , key: 'weapons'
        , icon: <AppstoreOutlined />
    }
    , {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Ant Design
            </a>
        ),
        key: 'alipay',
        icon: <AppstoreOutlined />,
    },
];