import React from 'react'
import { Button } from 'react-bootstrap';
import TopIcons from './TopContentData';

export default function TopContent(props) {
    return (
        <div className = {props.Show ? "top-content active" :"top-content"}>
            <Button className = "top-btn">50 de 2000</Button>
            {
                TopIcons.map(item => (
                    <Button className = "top-btn">
                        {item.icon}
                    </Button>
                ))
            }
        </div>
    )
}