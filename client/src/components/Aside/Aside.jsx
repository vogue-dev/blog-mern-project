import React from 'react';

// import DatePickerField from '../Filter/Date/DatePickerField';
import InputField from './Filter/InputField/InputField.jsx';
import ButtonCustom from './Filter/Button/ButtonCustom.jsx';

import './aside.scss';

const Aside = () => {
    return (
        <div className="aside">
            <div className="filter">
                <div className="filter__text">Поиск</div>
                <form className="filter__form">
                    <InputField id="filled-basic" label="Откуда" variant="filled" />
                    <InputField id="filled-basic" label="Куда" variant="filled" />

                    {/* <DatePickerField label="Отправка" />
							<DatePickerField label="Прибытие" /> */}
                    {/* <DatePickerField direction={'from'} placeholder="Дата отбытия" />
							<DatePickerField direction={'to'} placeholder="Дата прилета" /> */}
                    <ButtonCustom text="Поиск" />
                </form>
            </div>
        </div>
    );
};

export default Aside;
