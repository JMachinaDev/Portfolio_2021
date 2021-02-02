import React, {useState, useEffect} from 'react';
import TaskTodo from "../components/Tasks/TaskTodo";
import TaskDone from '../components/Tasks/TaskDone';
import { Client } from '../services/FetchClient';

const PostTasks = () => {
  const[postData, setPost] = useState([]);

  const initializeData = () => {
    const client = new Client();
    client.listTasks()
      .then((data) => setPost(data))
      .catch(console.error);
  };
  useEffect(initializeData, []);

  if(!postData) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

  return (
    <div className="dark-theme min-h-screen p-12">
      <main className="container mx-auto aesthetic">
        <section className="grid md:grid-cols-2 lg:grid-cols-flow gap-6">

          <section className="task-container med-theme border-style relative rounded shadow-xl p-4 h-auto w-auto ">
            <h1 className="text-3xl text-left font-semibold py-4">Tasks</h1>
            { postData && postData.filter(p => !p.url).map((task, index) => (
              <TaskTodo task={task} key={index} />
            ))}
          </section>

          <section className="task-container med-theme border-style relative rounded shadow-xl p-4 h-auto w-auto">
            <h1 className="text-3xl text-left font-semibold py-4">Completed</h1>
            { postData && postData.filter(p => p.url).map((task, index) => (
              <TaskDone  task={task} key={index} />
            ))}
          </section>

        </section>
      </main>
    </div>
	);
}

export default PostTasks;