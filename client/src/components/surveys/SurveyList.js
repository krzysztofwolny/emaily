import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSurveys } from '../../actions';

const SurveyList = () => {
    const surveysList = useSelector(state => state.surveys);
    const fetchSurveysList = useDispatch();
    useEffect(() => {
        fetchSurveysList(fetchSurveys());
    }, []);
    console.log(surveysList);
    const renderSurveys = () => {
        return surveysList.reverse().map(surveysList => {
            return(
                <div className="card darken-1" key={surveysList._id}>
                    <div className="card-content text-white">
                    <span className="card-title">{surveysList.title}</span>
                    <p>
                        {surveysList.body}
                    </p>
                    <p className="right">
                        Set on: {new Date(surveysList.dateSent).toLocaleDateString()}
                    </p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {surveysList.yes}</a>
                        <a>No: {surveysList.no}</a>
                    </div>
                </div>
            );
        })
    };
    return(
        <div>
            {renderSurveys()}
        </div>
    );
};

export default SurveyList;