import React from 'react';

export default class ExamImplementSelect extends React.Component {

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
    
    clickEvent(event){
        
        this.props.answer(event);
    }

    shuffle = (array) => {
        for(var i = array.length - 1; i > 0; i--){
            var r = Math.floor(Math.random() * (i + 1));
            var tmp = array[i];
            array[i] = array[r];
            array[r] = tmp;
        }
        return array;
    }

    render(){
        const select_num = this.shuffle([1,2,3,4]);

        return(
            <div className="select_buttons">
                <div className="row">
                    <div className="col-xs-6">
                        <input type="button" className="btn btn-sm btn-flat-border" value={"1:"+this.props.question["select" + select_num[0]]} onClick={this.clickEvent.bind(this)} name={select_num[0]}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <input type="button" className="btn btn-sm btn-flat-border" value={"2:"+this.props.question["select" + select_num[1]]} onClick={this.clickEvent.bind(this)} name={select_num[1]}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <input type="button" className="btn btn-sm btn-flat-border" value={"3:"+this.props.question["select" + select_num[2]]} onClick={this.clickEvent.bind(this)} name={select_num[2]} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <input type="button" className="btn btn-sm btn-flat-border" value={"4:"+this.props.question["select" + select_num[3]]} onClick={this.clickEvent.bind(this)} name={select_num[3]} />
                    </div>
                </div>
            </div>
        );
    }

}