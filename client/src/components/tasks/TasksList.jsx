import React from 'react';
import TaskCard from './TaskCard';

const TasksList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskCard task={task} key={task._id} />
      ))}
    </div>
  );
}

export default TasksList;
