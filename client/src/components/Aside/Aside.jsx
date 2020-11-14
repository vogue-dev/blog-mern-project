import React from 'react';

// import DatePickerField from '../Filter/Date/DatePickerField';
import InputField from './Filter/InputField/InputField.jsx';
import ButtonCustom from './Filter/Button/ButtonCustom.jsx';

import './aside.scss';

const Aside = () => {
	return (
		<aside>
			<div className="filter">
				<form className="">
					<InputField label="Откуда" />
					<InputField label="Куда" />

					{/* <DatePickerField label="Отправка" />
							<DatePickerField label="Прибытие" /> */}
					{/* <DatePickerField direction={'from'} placeholder="Дата отбытия" />
							<DatePickerField direction={'to'} placeholder="Дата прилета" /> */}
					<ButtonCustom text="Поиск" />
				</form>
			</div>
		</aside>
	);
};

export default Aside;
