import React, {Component} from 'react'
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";

export default class App extends Component{

    // 在render上面初始化状态。首先按要考虑数据作用于某个组件，还是多个组件，如果是多个组件，就必须将初始化状态放在它们的父组件中去
    state = {
        comments:[
            {username: 'Tom', content:'React挺好的'},
            {username: 'Jack', content:'React太难了'},
        ]
    }


    // 添加方法
    addComment = (comment) => {
        // 将最新输入的comment添加到comments, 首先要去取出comments
        const {comments} = this.state
        comments.unshift(comment)
        //  更新状态
        this.setState({comments})

    }

    //  牢记一句话，数据在哪个组件，更改数据变化的方法，就要写在哪个组件
    //  因此删除评论就应该在写在这个组件，删除数组，最容易的就是删除下标
    deleteComment = (index) => {
        const {comments} = this.state
        // 删除操作，splice可以做增、删、改三种操作
        // splice(index, 1, {}) 表示删除1个，并把{}添加，相当于改
        // splice(index, 0, {}) 表示删除0个，并把{}添加，相当于增
        // splice(index, 1) 表示一次删除1个
        comments.splice(index,1)
        this.setState({comments})
    }

    render() {
        const {comments} = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">

                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>

                </div>
            </div>
        )
    }
}