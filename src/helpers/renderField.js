import React from 'react';
import 'react-dates/initialize';
import 'react-with-styles';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default ({input, type, meta, id, label ,isEditMode}) => {
    const error = <div>
        {meta.error && meta.touched && (
            <span className="red-text text-lighten-2">{meta.error}</span>
        )}
    </div>
    const onDateChange = value => {
        input.onChange({ value })
    };
    switch (type) { 
        case "number":
        case "text":
            return (
                <div className="input-field">
                    <input
                        {...input}
                        className={meta.error && meta.touched ? "input-error" : ""} 
                        id={id} type={type}/>
                    <label className ={isEditMode?'active':''} htmlFor={id}>{label}</label>
                    {error}
                </div>
            );
        case "textarea":
            return (
                <div className="input-field">
                    <textarea
                        {...input}
                        id={id}
                        className={meta.error && meta.touched
                        ? "materialize-textarea input-error"
                        : "materialize-textarea"}/>
                    <label className ={isEditMode?'active':''} htmlFor={id}>{label}</label>
                    {error}
                </div> );
        case "date":
            return (
                <SingleDatePicker
                    date={input.value}
                    focused={meta.active}
                    onDateChange={onDateChange}
                    id={id}
                    onFocusChange={({ focused }) => focused ? input.onFocus(true) : input.onBlur(true)}
                />
            );
        default:
            return "";
    }
};