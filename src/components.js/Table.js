import getFormattedDate from '../getFormattedDate';
import TableRow from './TableRow';

export default function Table(props) {
  const {
    workouts,
    onDeleteClick: handleDeleteClick,
  } = props;

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГ)</th>
          <th>Пройдено (км.)</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => {
          return (
            <TableRow
              key={workout.id}
              id={workout.id}
              date={getFormattedDate(workout.date)}
              distance={workout.distance}
              onDeleteClick={handleDeleteClick}
            />
          );
        })}
      </tbody>
    </table>
  );
}