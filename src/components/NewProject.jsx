import { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

export default function NewProject({ onStartAddProject, onCancelAddProject }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSubmit = () => {
    if (
      title.current.value.trim() === '' ||
      description.current.value.trim() === '' ||
      dueDate.current.value.trim() === ''
    ) {
      modal.current.open();
      return;
    }

    onStartAddProject({
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonLabel='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>
          Invalid input!
        </h2>
        <p className='text-stone-600 mb-4'>Please complete tha form.</p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={onCancelAddProject}
              className='text-stone-800 hover:text-stone-950'
            >
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
    </>
  );
}
