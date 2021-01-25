import React , { useState } from 'react';

const AddTask = ({ onTaskSubmit , totalTasks }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onTaskTextChange = (event) => {
		setText(event.target.value);
	};

	const onDayChange = (event) => {
		setDay(event.target.value);
	};


    const onAddTask = (event) => {
        event.preventDefault();
        if(!text) {
            alert('Please enter the task!!');
            return;
        }
        onTaskSubmit({id: totalTasks + 1, text:text , date:day , reminder:reminder});

        setText('');
        setReminder(false);
        setDay('');
    }

	return (
		<form className="add-form" onSubmit={onAddTask}>
			<div className="form-control">
				<label>Task</label>
				<input type="text" placeholder="Add Task" value={text} onChange={onTaskTextChange} />
			</div>
			<div className="form-control">
				<label>Day & Time</label>
				<input type="text" placeholder="Add Day/Time" value={day} onChange={onDayChange} />
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
				<input
                    type="checkbox"
                    checked={reminder}
					value={reminder}
					onChange={(event) => {
						setReminder(event.currentTarget.checked);
					}}
				/>
			</div>
			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddTask;
