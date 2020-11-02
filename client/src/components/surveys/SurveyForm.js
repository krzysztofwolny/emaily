import React from 'react';
import SurveyField from './SurveyField';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

const SurveyForm = (props) => {
    const renderFields = () => {
       return FIELDS.map( field => {
            return <Field key={field.name} component ={SurveyField} type="text" label={field.label} name={field.name} />
       });
    }
    return(
        <div>
            <form onSubmit={props.handleSubmit(props.onSurveySubmit)}>
                {renderFields()}
                <Link to="/surveys" className="red btn-flat white-text left">
                    Cancel
                </Link>
                <button className="teal btn-flat right white-text" type="submit">Next<i className="material-icons right">done</i></button>
            </form>
        </div>
    );
}

const validate = (values) => {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
};

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);