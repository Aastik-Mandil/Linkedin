import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from '@material-ui/icons'
import "./Post.css"
import InputOption from './InputOption'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__button">
                <InputOption Icon={ThumbUpOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlined} title="Share" color="gray" />
                <InputOption Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post
