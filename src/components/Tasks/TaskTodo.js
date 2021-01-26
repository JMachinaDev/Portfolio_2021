import React from "react";
import urlFor from '../../services/ImageBuilder';

const TaskTodo = (props) => {
  const { task } = props;

  return (
    <main to={task.slug.current} >
      <section className="py-2">

        <section>
          <header>
            <h4 className="text-lg font-bold">Task: {task.title}</h4>
            <span className="text-xs text-gray-600">Created: {new Date(task.date).toLocaleDateString()}</span>
          </header>
        </section>

        <section className="display-container">
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

      </section>
		</main>
	);
};

export default TaskTodo;
