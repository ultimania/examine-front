import React from 'react';

export default class ExamImplementInfo extends React.Component {

    constructor(){
        super();
    }

    componentDidMount(){
        console.log("コンポーネントのマウント後")
    }
    
    shouldComponentUpdate(){
        console.log("コンポーネントがアップデートされる前1")
        return true;
    }

    componentDidUpdate(){
        console.log("コンポーネントがアップデートされた後")
    }
    
    componentWillUnmount(){
        console.log("コンポーネントがアンマウントされた後")
    }
    
    render(){
        return(
            <div className="exam_info">
                <div className="row">
                    <div className="col-xs-6">
                        <div className="question_meta">
                            <span className="qnum">No.{this.props.qnum + 1}</span>
                            <span className="qclass">{this.props.question["exam_class"]}</span>
                            <span className="reserve">reserve</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <div className="question_text">
                            <p>{this.props.question["text"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}