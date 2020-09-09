import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ExamConfig from './ExamConfig';
import ExamImplement from './ExamImplement';
import ExamResult from './ExamResult';


export default class Exam extends React.Component {
    
    render(){
        return(
            <Switch>
                <Route exact path='/' >
                    <ExamConfig/>
                </Route>
                <Route path='/exam'>
                    <ExamImplement/>
                </Route>
                <Route path='/result' >
                    <ExamResult/>
                </Route>
                <Route>
                    <h2>Not Found</h2>
                </Route>
            </Switch>
        );
    }

}