import useJsonFetch from '../functions/useJsonFetch';

export default function Third() {
  const { data, loading } = useJsonFetch(`${process.env.REACT_APP_LOADING_URL}`);

  if (data && loading) {
    console.log(`Third component loading: ${loading}`);
  }

  return null;
}