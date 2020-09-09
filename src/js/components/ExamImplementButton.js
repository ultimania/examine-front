import React from 'react';

export default class ExamImplementButton extends React.Component {

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
        this.props.clickButton(event);
    }
   
    render(){
        return(
            <div className="row">
                <div className="header-buttons">
                    <div className="col-xs-2">
                        <div className="button-prev">
                            <input name="prev" type="button" className="btn btn-sm btn-default" value="prev" onClick={this.clickEvent.bind(this)} />
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <div  className="button-mark">
                            <input type="button" className="btn btn-sm btn-default" value="mark" onClick={this.clickEvent.bind(this)} />
                        </div>
                    </div>
                    <div className="col-xs-2">
                        <div  className="button-next">
                            <input type="button" className="btn btn-sm btn-default" value="next" onClick={this.clickEvent.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}