import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'
import './commentItem.css'

export default class CommentItem extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    }

    handleClick = () => {
        const {comment,index} = this.props
    //     1、先提示删除，(注：直接使用confirm会出现“confirm'  no-restricted-globals，即confirm不是全局变量”，因此应该使用window.confirm)
        if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
            // 2、如何使用publish或者subscribe?  就看是否触发事件
            //    由于此处点击就按钮就删除了评论，就触发了事件。
            //    触发事件就用publish
            // 删除，最好是删除下标，则传入下标最好
            PubSub.publish('deleteComment', index)


        }
    }

    render() {
        const {comment} = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}