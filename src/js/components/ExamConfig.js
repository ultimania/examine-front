import React from 'react';

import "../../css/ExamConfig.css";
import ExamConfigInput from './ExamConfigInput';
import ExamConfigSubmit from './ExamConfigSubmit';

export default class ExamConfig extends React.Component {

    render(){
        return(
            <div>
                <ExamConfigInput block_class="mode"   form_type="examCombo" />
                <ExamConfigInput block_class="volume" form_type="examCombo" />
                <ExamConfigInput block_class="scope"  form_type="examCombo" />
                <ExamConfigInput block_class="year"   form_type="examCombo" />
                <ExamConfigSubmit num="2" />
            </div>
        );
    }

}