import React from 'react';

import "../../css/ExamImplement.css";

import ExamConfigStore from "../stores/ExamConfigStore"
import ExamImplementStore from "../stores/ExamImplementStore"

import ExamImplementButton from "./ExamImplementButton"
import ExamImplementInfo from "./ExamImplementInfo"
import ExamImplementSelect from "./ExamImplementSelect"

import dispatcher from "../dispatcher"


export default class ExamImplement extends React.Component {

    constructor(){
        super();
        this.state = {
            qnum : 0,
            answer: null,
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
    
    
    exit() {
        var result = window.confirm('試験を終了してよろしいですか？');
        if(result){
            console.log('試験終了');
            var data = this.exam;
            data.answers = ExamImplementStore.getAnswers().toString();
            
            const exam_id = this.exam.id;
            const method = "PUT";
            const body = JSON.stringify(data);
            const url = "http://192.168.11.21:10010/api/exam/" + exam_id + "/"
            const headers = {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };
      
            return fetch(url, {
              method,
              headers,
              body,
              mode: 'cors',
            })
            .then((response) => response.json())
            .then((responseJson) => {
            this.props.history.push(
                '/result',
              );
            })
            .catch((error) =>{
              console.error(error);
            });
        }
    }

    next() {
        if (this.state.qnum + 1 < this.exam["volume"]){
            this.setState({ 
                qnum : this.state.qnum + 1,
                answer : ExamImplementStore.getAnswer(this.state.qnum + 1),
            });
        } else {
            this.exit();
        }
    }

    prev() {
        if (this.state.qnum > 0){
            this.setState({ 
                qnum : this.state.qnum - 1,
                answer : ExamImplementStore.getAnswer(this.state.qnum - 1),
            });
            console.log(this.state);
        }
    }

    mark() {

    }

    clickButton = (event) => {
        event.currentTarget.blur();
        switch (event.target.defaultValue) {
            case "prev":{
                this.prev();
                break;
            }
            case "mark":{
                this.mark();
                break;
            }
            case "next":{
                this.next();
                break;
            }
            default:
                break;
        }
    }

    answer = (event) => {
        event.currentTarget.blur();
        dispatcher.dispatch({
            type: "ANSWERED",
            name: 'answers',
            value: {
                qnum : this.state.qnum,
                answer : event.currentTarget.name
            },
        });
        this.next();
    }

    render(){
        return(
            <div className="implement">
                
                <ExamImplementButton clickButton={this.clickButton.bind(this)} />
                <ExamImplementInfo qnum={this.state.qnum} question={this.questions[this.state.qnum]} />
                <ExamImplementSelect answer={this.answer.bind(this)} question={this.questions[this.state.qnum]} />

            </div>
        );
    }

}