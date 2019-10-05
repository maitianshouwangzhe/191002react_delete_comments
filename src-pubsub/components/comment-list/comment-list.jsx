import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/comment-item";
import './commentList.css'

export default class CommentList extends Component{
    // 声明给组件类CommentList中要接收的数据类型及属性
    // 注意：有static表示给组件类CommentList添加；无static表示给组件对象添加
    static propTypes={
        comments:PropTypes.array.isRequired
    }

    render() {
        // 从属性里面读东西，建议第一步先取出来！！！！！！！，并用this.props
        const {comments} = this.props
        // 计算出是否显示
        const display = comments.length == 0 ?'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <CommentItem comment={comment} key={index}  index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}