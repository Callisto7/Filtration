import useJsonFetch from '../functions/useJsonFetch';

export default function Second() {
  const { loading, error } = useJsonFetch(`${process.env.REACT_APP_ERROR_URL}`);

  if (!loading) {
    console.log(`Second component error: ${error}`);
  }

  return null;
}