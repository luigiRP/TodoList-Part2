import React, { Fragment, useState, useEffect } from "react";

//create your first component

export function Home() {
	const [tasks, setTasks] = useState([]);
	let [tasksQuantity, setTasksQuantity] = useState(0);

	const addTask = e => {
		if (e.key === "Enter") {
			let inputText = document.querySelector("input");
			let input = document.querySelector("input").value;
			let newTasks = [];
			for (let i = 0; i < tasks.length; i++) {
				newTasks.push(tasks[i]);
			}
			newTasks.push(input.trim());
			setTasks(newTasks);
			inputText.value = "";
		}
	};
	const deleteTask = (taskToDelete, index) => {
		var filtered = tasks.filter(function(value, i) {
			return index !== i;
		});
		setTasks(filtered);
	};

	if (tasks.length === 0) {
		return (
			<Fragment>
				<h1 className="text-center">todos</h1>
				<div className="container bg-white card">
					<div className="row p-3">
						<input
							type="text"
							placeholder="What needs to be done?"
							className="container"
							onKeyPress={e => addTask(e)}
						/>
					</div>
					<div className="row">
						<h3 className="text-center p-3">There are no tasks</h3>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				<h1 className="text-center">todos</h1>
				<div className="container bg-white card">
					<div className="row p-3">
						<input
							type="text"
							placeholder="What needs to be done?"
							className="container"
							onKeyPress={e => addTask(e)}
						/>
					</div>

					{tasks.map((taskElement, index) => {
						return (
							<div
								className="row px-3 border-top d-flex align-items-center  justify-content-between task"
								key={index}>
								<span>{taskElement}</span>
								<span
									className="text-danger h3 delete"
									onClick={() =>
										deleteTask(taskElement, index)
									}>
									X
								</span>
							</div>
						);
					})}
					<div className="row px-3 border-top d-flex align-items-center task">
						<span className="text-secondary">
							{tasks.length} tasks left
						</span>
					</div>
				</div>
			</Fragment>
		);
	}
}
