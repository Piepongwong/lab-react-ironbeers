import React from 'react'
import Navbar from '../components/Navbar';
import './Default.css';

export default function DefaultLayout(props) {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}
