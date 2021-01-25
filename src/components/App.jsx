import React, { useState } from 'react';

import '../styles/tracker.css';

import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';

import getTasks from '../services/tasks';

const App = () => {
	const [tasks, setTasks] = useState(getTasks());
	const [showAddTask, setShowAddTask] = useState(false);

	const onDeleteTask = (id) => {
		const deleteTask = tasks.filter((task) => {
			return task.id !== id;
		});

		setTasks(deleteTask);
	};

    const onTaskSubmit = (task) => {

        setTasks([...tasks , task]);


    }

	const onToggleReminder = (id) => {
		// console.log(`Toggle Reminder taskId: ${id}`);

		setTasks(
			tasks.map((task) => {
				return task.id === id ? { ...task, reminder: !task.reminder } : task;
			})
		);
	};

	const toggleAddTaskPanel = () => {
		setShowAddTask(!showAddTask);
	};

	return (
		<div className="container">
			<Header title="Task Tracker" buttonTxt={showAddTask ? 'Hide Add Task' : 'Show Add Task'} toggleAddTaskPanel={toggleAddTaskPanel} />
			{showAddTask === true ? <AddTask onTaskSubmit={onTaskSubmit} totalTasks={tasks.length} /> : ''}
			{tasks.length === 0 ? (
				'No Pending Task(s)'
			) : (
				<Tasks tasks={tasks} onToggle={onToggleReminder} onDeleteTask={onDeleteTask} />
			)}
		</div>
	);
};

export default App;
