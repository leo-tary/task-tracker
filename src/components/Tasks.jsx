import React from 'react';

import Task from './Task';

const Tasks = ({ tasks , onDeleteTask , onToggle }) => {
	const renderTasks = tasks.map((task) => {
		return <Task key={task.id} task={task} onToggleReminder={onToggle} onDeleteTask={onDeleteTask} />;
	});

	return <div>{renderTasks}</div>;
};

export default Tasks;
