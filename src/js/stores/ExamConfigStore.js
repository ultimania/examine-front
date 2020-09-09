import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class ExamConfigStore extends EventEmitter {
  
  constructor(){
    super();
    this.select_mode = [
      "試験モード",
      "練習モード",
    ];
    this.select_volume = [
      "10",
      "20",
      "40",
      "80",
      "100",
      "200",
    ];
    this.select_scope = [
      "全般",
      "統合",
      "スコープ",
      "タイム",
      "コスト",
      "品質",
      "コミュニケーション",
      "リスク",
      "調達",
      "ステークホルダー",
    ];
    this.select_year = [
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
    ];
    this.current = {
      mode: "試験モード",
      volume: "10",
      scope: "全般",
      year: "2020",
    };
    this.questions = [];
    this.exam = [];
    this.answers = [];
  }

  getMode() {
    return this.select_mode;
  }

  getVolume() {
    return this.select_volume;
  }

  getScope() {
    return this.select_scope;
  }

  getYear() {
    return this.select_year;
  }

  getCurrentConfig() {
    return this.current;
  }

  getQuestions(){
    return this.questions;
  }

  getExam(){
    return this.exam;
  }

  handleActions(action){
    switch (action.type) {
      case "CLEAR_CONFIG":{
        this.current = {
          mode: "試験モード",
          volume: "10",
          scope: "全般",
          year: "2020",
        };
        this.emit("change");
        break;
      }
      case "CHANGE_CONFIG":{
        this.current[action.name] = action.value;
        break;
      }
      case "ADD_EXAM":{
        this.questions = action.value.questions;
        this.exam = action.value.exam;
        console.log(this.exam);
        break;
      }
    
      default:
        break;
    }
  }

}

const examConfigStore = new ExamConfigStore();
dispatcher.register(examConfigStore.handleActions.bind(examConfigStore));

export default examConfigStore;
