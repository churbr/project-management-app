import { useRef } from 'react';
import Input from './Input';

export default function NewProject({ onSubmit }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSubmit = () => {
    const data = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    onSubmit(data);
  };

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSubmit}
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} type='text' label='Title' />
        <Input ref={description} label='Description' textarea />
        <Input ref={dueDate} type='date' label='Due Date' />
      </div>
    </div>
  );
}
