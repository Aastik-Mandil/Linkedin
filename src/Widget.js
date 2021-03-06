import React from 'react'
import { FiberManualRecord, Info } from '@material-ui/icons'
import "./Widget.css"

function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className="widget__article">
            <div className="widget__articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widget__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widget">
            <div className="widget__header">
                <h2>LinkedIn News</h2>
                <Info />
            </div>
            {newsArticle("PAPA React is back", "Top-news - 9899 readers")}
            {newsArticle("CoronaVirus Ok update", "Top-news - 9899 readers")}
            {newsArticle("PAPA React is good", "Top-news - 9899 readers")}
        </div>
    )
}

export default Widget
