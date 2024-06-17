import { useState } from 'react';

export default function NewTask({ add }) {
  const [enteredTask, setEnteredTask] = useState('');

  /**
   * Always set a default value to a state, so that react will know what type of data it is.
   *
   * This is to avoid the following error:
   * A component is changing an uncontrolled input to be controlled.
   * This is likely caused by the value changing from undefined to a defined value, which should not happen.
   * Decide between using a controlled or uncontrolled input element for the lifetime of the component.
   *
   * **/

  function handleChange(e) {
    setEnteredTask(e.target.value);
  }

  function onSubmit() {
    if (enteredTask.trim() === '') {
      return;
    }

    add(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className='text-stone-700 hover:text-stone-950'
        onClick={onSubmit}
      >
        Add task
      </button>
    </div>
  );
}
