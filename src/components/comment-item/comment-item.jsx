import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './commentItem.css'

export default class CommentItem extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    handleClick = () => {
        const {comment, deleteComment, index} = this.props
    //     1、先提示删除，(注：直接使用confirm会出现“confirm'  no-restricted-globals，即confirm不是全局变量”，因此应该使用window.confirm)
        if (window.confirm(`确定删除${comment.username}的评论吗？`)) {
            // 2、确定删除index,但是该组件没index，只能先去父组件CommentList传index
            deleteComment(index)
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