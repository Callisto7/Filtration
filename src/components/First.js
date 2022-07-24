import useJsonFetch from '../functions/useJsonFetch';

export default function First() {
  const { loading, data } = useJsonFetch(`${process.env.REACT_APP_DATA_URL}`);

  if (!loading) {
    console.log(`First component data: ${data}`);
  }

  return null;
}