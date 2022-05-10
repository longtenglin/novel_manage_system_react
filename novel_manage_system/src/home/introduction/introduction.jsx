import React from "react";
import { Card } from 'antd';
import './introduction.css';

class Introduction extends React.Component{
    constructor(props) {
        super(props);
        this.state = { items : props.items};
    }
    render() {
        const items = this.state.items?this.state.items: option;
        return (
            <div className="site-card">
                {
                    items.map((item, index)=>{
                        const ind = index%2;
                        return (
                            <div className={"site-card-div"} key={index}>
                                <Card title={item.title} bordered={false} className={"site-card-"+ind}>
                                    <p>{item.content}</p>
                                </Card>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Introduction;

const option = [
    {
        title: "Card Title",
        content: "this is card content"
    }
    , {
        title: "Card Title",
        content: "this is card content"
    }
    , {
        title: "Card Title",
        content: "this is card content"
    }
    , {
        title: "Card Title",
        content: "this is card content"
    }
    , {
        title: "Card Title",
        content: "this is card content"
    }
]