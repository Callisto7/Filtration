import React, { useState } from 'react';

function computeInitialCounter() {
  console.log('Some calculations...')
  return Math.trunc(Math.random() * 20)
  //Вычислительная функция
}

function State() {
  // const [counter, setCounter]  = useState(0) //Создание состояния
  const [counter, setCounter]  = useState(() => {
    return computeInitialCounter()
    //Оптимизация состояния.
  })

  const [state, setState] = useState({
    title: 'Счетчик',
    date: Date.now()
  })

  function increment() {
    // setCounter(counter + 1) 
    // setCounter(counter + 1)
    
    setCounter((prevCounter) => {
      return prevCounter + 1
      //Создание collback функции
    })

    // setCounter(prev => prev + 1) //Увеличиваем на 2

  }

  function decrement() {
    setCounter(counter - 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'Новое название'
      }
    })
    //Функция которая меняет состояние, сохраняя предыдущее...
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Добавить</button>
      <button onClick={decrement} className='btn btn-danger'>Убрать</button>
      <button onClick={updateTitle} className='btn btn-default'>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre> {/* Вывод состояния в браузер */}
    </div>
  );
}

export default State;