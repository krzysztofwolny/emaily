import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = (props) => {
    const formValues = useSelector(state => state.form.surveyForm.values);
    const onSubmitSurvey = useDispatch();
    const reviewFields = formFields.map(({ name, label }) => {
        return(
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    return(
        <div>
            <h5>Please review the form</h5>
            {reviewFields}
            <button
                className="yellow darken-3 white-text btn-flat"
                onClick={props.onCancel}
            >
                    Back
            </button>
            <button
            onClick={() => onSubmitSurvey(actions.submitSurvey(formValues, props.history))} 
            className="green btn-flat right white-text">
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

export default withRouter(SurveyFormReview);