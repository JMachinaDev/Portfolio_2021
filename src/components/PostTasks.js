import React, {useState, useEffect} from 'react';
import TaskTodo from "../components/Tasks/TaskTodo";
import TaskDone from '../components/Tasks/TaskDone';
import { Client } from '../services/FetchClient';
import Pagination from 'react-sanity-pagination';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';


const itemsToSend = [];

const PostTasks = () => {
  const[postTask, setTask] = useState([]);

  const postsPerPage = 5;

  const initializeData = () => {
    const client = new Client();
    client.listTasks()
      .then((data) => {
        itemsToSend.push(...data)
      })
      .catch(console.error);
  };
  useEffect(initializeData, []);

  const action = (page, range, postTask) => {
    console.log('Page: ', page, 'Items: ', postTask);
    setTask(postTask);
  }

  if(!postTask) return <div className="bg-gray-900 text-gray-100 w-full h-full absolute flex justify-center">Loading...</div>;

  return (
    <div className="dark-theme min-h-screen p-12">
      <main className="container mx-auto aesthetic">
        <section className="grid md:grid-cols-2 lg:grid-cols-flow gap-6 pb-12">

          <section className="task-container med-theme border-style relative rounded shadow-xl p-4 h-auto w-auto ">
            <h1 className="text-3xl text-left font-semibold py-4">Tasks</h1>
            { postTask && postTask.filter(p => !p.url).map((task, index) => (
              <TaskTodo task={task} key={index} />
            ))}
          </section>

          <section className="task-container med-theme border-style relative rounded shadow-xl p-4 h-auto w-auto">
            <h1 className="text-3xl text-left font-semibold py-4">Completed</h1>
            { postTask && postTask.filter(p => p.url).map((task, index) => (
              <TaskDone  task={task} key={index} />
            ))}
          </section>

        </section>

        <Pagination
          nextButton = {true}
          prevButton = {true}
          nextButtonLabel = {<BsChevronRight/>}
          prevButtonLabel = {<BsChevronLeft/>}
          items = {itemsToSend}
          action = {action}
          postsPerPage = {postsPerPage}
          />

      </main>
    </div>
	);
}

export default PostTasks;