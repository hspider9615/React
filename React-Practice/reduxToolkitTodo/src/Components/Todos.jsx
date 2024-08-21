import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className='max-w-lg mx-auto my-10'>
      <h2 className='text-3xl font-semibold text-center text-gray-900 mb-6'>
        My Todo List
      </h2>
      <ul className='bg-white shadow-lg rounded-lg divide-y divide-gray-200'>
        {todos.map((todo) => (
          <li
            className='px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition duration-300'
            key={todo.id}
          >
            <div className='text-gray-800 text-lg'>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className='text-red-600 hover:text-red-800 transition duration-300 transform hover:scale-110'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
