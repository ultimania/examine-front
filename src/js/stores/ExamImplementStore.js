import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class ExamImplementStore extends EventEmitter {
  
  constructor(){
    super();
    this.answers = [];

  }

  getAnswer(qnum) {
    return this.answers[qnum];
  }

  getAnswers() {
    return this.answers;
  }

  handleActions(action){
    switch (action.type) {
      case "ANSWERED":{
        this.answers[action.value.qnum] = action.value.answer;
        this.emit("change");
        break;
      }
    
      default:
        break;
    }
  }

}

const examImplementStore = new ExamImplementStore();
dispatcher.register(examImplementStore.handleActions.bind(examImplementStore));

export default examImplementStore;
