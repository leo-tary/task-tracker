import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDeleteTask , onToggleReminder }) => {
    // console.log(task);
	return (
		<div className={`task ${ task.reminder ? 'reminder': ''}`} onDoubleClick={() => { onToggleReminder(task.id) }}>
			<h3>
				{task.text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => {
						onDeleteTask(task.id);
					}}
				/>
			</h3>
			<p>Date: {task.date}</p>
		</div>
	);
};

export default Task;
