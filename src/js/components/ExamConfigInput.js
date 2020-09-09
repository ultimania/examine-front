import React from 'react';

import ExamConfigStore from "../stores/ExamConfigStore"
import dispatcher from "../dispatcher"

export default class ExamConfigInput extends React.Component {
  constructor(){
    super();
    this.formdata = {
      label : {
        mode : "試験モード",
        volume : "出題数",
        scope : "出題範囲",
        year : "出題年度",
      },
      item : {
        mode : ExamConfigStore.getMode(),
        volume : ExamConfigStore.getVolume(),
        scope : ExamConfigStore.getScope(),
        year : ExamConfigStore.getYear(),
      },
      input_name : {
        mode : 'mode',
        volume : 'volume',
        scope : 'scope',
        year : 'year',
      },
    };
    this.state = {
      mode: "試験モード",
      volume: "10",
      scope: "全般",
      year: "2020",
    };
  }

  componentDidMount(){
    console.log("コンポーネントのマウント後")
    ExamConfigStore.on("change", () => {
      this.setState({
        [this.props.block_class] : [ExamConfigStore.getCurrentConfig[this.props.block_class]]
      })
    });
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

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
    dispatcher.dispatch({
      type: "CHANGE_CONFIG",
      name: event.target.name,
      value: event.target.value,
    });
  }

  render(){
    return (
      <div className={this.props.block_class}>
        <div className="row">
          <div className="col-xs-6 config_block">

            <div className="col-xs-6">
              <div className="exam_label">
                {this.formdata["label"][this.props.block_class]}
              </div>
            </div>
            <div className="col-xs-6">
              <div className={this.props.form_type}>
                { this.props.form_type === "examCombo" ? (
                  <select name={this.formdata['input_name'][this.props.block_class]} className="custom-select" onChange={this.handleChange.bind(this)} value={this.state[this.props.block_class]} >
                    {this.formdata["item"][this.props.block_class].map(value => {
                      return <option value={value}>{value}</option>
                    })}
                  </select>
                ) : (
                  <input name={this.props.block_class} type="text" />
                )}
              </div>
            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

