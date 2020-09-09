import React from 'react';

import "../../css/ExamResult.css";
import ExamImplementStore from "../stores/ExamImplementStore"
import ExamConfigStore from "../stores/ExamConfigStore"
import ExamResultCorrect from "./ExamResultCorrect"
import ExamResultClass from "./ExamResultClass"
import ExamResultSubmit from "./ExamResultSubmit"

export default class ExamResult extends React.Component {

    constructor(){
        super();
        this.state = {
        };
        this.questions = ExamConfigStore.getQuestions();
        this.exam = ExamConfigStore.getExam();
    }

    componentDidMount(){
        console.log("コンポーネントのマウント後");
    }
    
    shouldComponentUpdate(){
        console.log("コンポーネントがアップデートされる前");
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
            <div className="implement">
                
                <ExamResultCorrect />
                <ExamResultClass exam={this.state.exam} />
                <ExamResultSubmit />

            </div>
        );
    }

}