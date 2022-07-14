import { nanoid } from 'nanoid';
import { useState } from 'react';
import './App.css';
import Form from './components.js/Form';
import Table from './components.js/Table';
import getTime from './getTime';
import workoutsData from './workoutsData';

function App() {
  const [workouts, setWorkouts] = useState(workoutsData);
  const [form, setForm] = useState({ date: '', distance: '' });
  const [editingMode, setEditingMode] = useState({ state: false, index: '' });

  function toggleEditingMode(index) {
    if (editingMode.state) {
      setEditingMode({ state: false, index: '' });
    } else {
      setEditingMode({ state: true, index: index });
    }
  }

  function handleFormSubmit(form) {
    let updatedWorkouts;

    if (editingMode.state) {
      const { index } = editingMode;

      updatedWorkouts = [
        ...workouts.slice(0, index),
        {
          id: workouts[index].id,
          date: form.date,
          distance: form.distance,
        },
        ...workouts.slice(index + 1),
      ];

      toggleEditingMode();
    } else {
      const index = workouts.findIndex(
        (workout) => getTime(workout.date) <= getTime(form.date)
      );

      if (index === -1) {
        updatedWorkouts = [
          ...workouts.slice(0, workouts.length),
          {
            id: nanoid(),
            date: form.date,
            distance: form.distance,
          },
        ];
      } else if (getTime(workouts[index].date) === getTime(form.date)) {
        updatedWorkouts = [
          ...workouts.slice(0, index),
          {
            id: workouts[index].id,
            date: workouts[index].date,
            distance: String(+workouts[index].distance + +form.distance),
          },
          ...workouts.slice(index + 1),
        ];
      } else {
        updatedWorkouts = [
          ...workouts.slice(0, index),
          {
            id: nanoid(),
            date: form.date,
            distance: form.distance,
          },
          ...workouts.slice(index),
        ];
      }
    }

    setWorkouts(updatedWorkouts);

    setForm({ date: '', distance: '' });
  }

  function handleFormChange({ target }) {
    const { name, value } = target;

    setForm(prevForm => ({ ...prevForm, [name]: value }));
  }

  function getWorkoutIndex(target) {
    const id = target.closest('.TableRow').id;

    const index = workouts.findIndex((workout) => workout.id === id);

    return index;
  }

  function handleDeleteClick({ target }) {
    const index = getWorkoutIndex(target);

    const updatedWorkouts = [
      ...workouts.slice(0, index),
      ...workouts.slice(index + 1),
    ];

    setWorkouts(updatedWorkouts);
  }



  return (
    <div className="App-container">
      <Form
        onSubmit={handleFormSubmit}
        onChange={handleFormChange}
        form={form}
      />
      <Table
        workouts={workouts}
        onDeleteClick={handleDeleteClick}
        
      />
    </div>
  );
}

export default App;