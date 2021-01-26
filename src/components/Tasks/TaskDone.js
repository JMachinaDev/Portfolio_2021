import React, { useState } from 'react';
import urlFor from '../../services/ImageBuilder';

const TaskDone = (props) => {
  const { task } = props;
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  
  function displayTaskInfo (e) {
    e.preventDefault();
    setShowAdditionalInfo(!showAdditionalInfo);
  };

  return (
    <main to={task.slug.current} >
      <section onClick={displayTaskInfo}>

        <section className="inline">
          <h4 className="inline-block text-lg font-bold">Task: {task.title}</h4>
          <span className="button-theme inline float-right">&gt;</span>
        </section>

        { showAdditionalInfo &&
          <section className="display-container">
            <div className="text-xs text-gray-600">
              Created: {' '}
            </div>
            <div className="text-xs text-gray-600">
              Completed: {new Date(task.date).toLocaleDateString()}
            </div>
            <a className="task-commit-link" href={task.url} target="_blank" rel="noreferrer">GIT COMMIT</a>
            <p className="text-gray-400">Description:</p>
            <p className="py-1">{task.description}</p>
            <span className="image-container">
              <img
                src={urlFor(task.authorImage).url()}
                alt={task.name}
                className="w-10 h-10 rounded-full inline-block"
              />
              <span className="text-gray-400 px-2">{task.name}</span>
            </span>
          </section>
        }

      </section>
		</main>
  )
};

export default TaskDone;