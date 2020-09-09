import React from 'react';
import { withRouter } from 'react-router';

import dispatcher from "../dispatcher"
import ExamConfigStore from "../stores/ExamConfigStore"

class ExamResultSubmit extends React.Component {

  constructor(){
    super();
    this.state = {
    };
  }

  componentDidMount(){
    console.log("コンポーネントのマウント後")
    this.store = this.props.store;
  }

  shouldComponentUpdate(){
    console.log("コンポーネントがアップデートされる前1")
    return true;
  }

  componentWillUpdate(){
    console.log("コンポーネントがアップデートされる前2")
  }

  componentDidUpdate(){
    console.log("コンポーネントがアップデートされた後")
  }

  componentWillUnmount(){
    console.log("コンポーネントがアンマウントされた後")
  }

  postConfig = (e) => {
    e.preventDefault();
    const method = "POST";
    const body = JSON.stringify(ExamConfigStore.getCurrentConfig());
    const url = "http://192.168.11.21:10010/api/exam/?format=json"
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
      dispatcher.dispatch({
        type: "ADD_EXAM",
        name: 'questions',
        value: responseJson,
      });
      this.props.history.push(
        '/exam',
        responseJson
      );
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  handleSubmit(event) {
    switch (event.target.name) {
      case "clear":{
        this.clearConfig(event);
        break;
      }
      case "start":{
        this.postConfig(event);
        break;
      }
      default:
        break;
    }
  }

  render(){
    const items = [];

    for (let i=1; i <= this.props.num; i++){
      items.push(
        <input name={this.state["button"+i]["name"]} type={this.state["button"+i]["type"]} className={ this.state["button"+i]["class"] } value={this.state["button"+i]["value"]} onClick={this.handleSubmit.bind(this)} />
      )
    }

    return (
      <div className="row">
        <div className="col-xs-6">
          <div className="commit_buttons">
              {items}
          </div>
        </div>
      </div>
    );
  }

}

export default withRouter(ExamResultSubmit);
