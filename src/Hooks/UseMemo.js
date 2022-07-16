import React, { useState, useMemo, useEffect } from 'react';

function complexCompute(num) {
  let i = 0
  while (i < 100000000) i++
  return num * 2
}

function UseMemo() {
  const [number, setNumber] = useState('42')
  const [colored, setColored] = useState(false)

  const styles = useMemo(() =>({
    color: colored ? 'darkred' : 'black'
  }), [colored])

// useMemo-помогает оптимизировать процесс

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect (() => {
    console.log('styles change');
  }, [styles])

  return (
    <div >
      <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
      <button className={'btn btn-success'} 
        onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className={'btn btn-danger'}
        onClick={() => setNumber(prev => prev - 1)}>Убрать</button>
      <button className={'btn btn-warning'}
        onClick={() => setColored(prev => !prev)}>Изменить</button>      
    </div>
  );
}
	
export default UseMemo