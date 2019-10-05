import React, {Component} from 'react'
import PropTypes from 'prop-types'


//  CommentAdd 是组件类
export default class CommentAdd extends Component{
    // 在此处接收了addComment, 它是来自父组件的方法
    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    // 初始化状态
    state = {
        username:'',
        content:''
    }
    handleNameChange = (event) => {
        const username =  event.target.value
        this.setState({username})

    }

    handleContentChange = (event) => {
        const content =  event.target.value
        this.setState({content})

    }

    // 添加自定义方法，必须要绑定bind.
    // 由于箭头函数没有自己的this，没有自己的this，就看外围的this， 而外围this正好是组件对象
    // 使用箭头函数,直接可以不用bind函数了
    handleSubmit = () => {
    //     收集输入数据,更新数组,就是更新状态,react官方建议使用受控组件更新,受控组件的前提是有初始化状态
    //     收集数据并封装成comment对象
        const comment = this.state
    //  更新状态(必须牢记一个原则: 数据在哪个组件，更新数据的行为就必须在哪个组件,,因此只能去父组件里面去写)
        this.props.addComment(comment)
    //   清空输入数据
        this.setState({
            username:'',
            content:''
        })
    }

    render() {
        const {username, content} = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        {/* 绑定onChange监听*/}
                        <input type="text" className="form-control" placeholder="用户名"
                               value={username} onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                                  value={content} onChange={this.handleContentChange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}