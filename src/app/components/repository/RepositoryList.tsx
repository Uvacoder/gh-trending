import React from 'react';
import RepositoryItem from './RepositoryItem';
import { getRepositories, RepositoryDTO } from '../../api';
import { Loader } from '../loader';

function RepositoryList(): JSX.Element {
  const { status, data, error, isLoading } = getRepositories();
  const mapData = (items?: RepositoryDTO[]) =>
    items?.map((item) => <RepositoryItem key={item.url} data={item} />);
  return (
    <>
      {status === 'error' && <span>Error: {error?.message}</span>}
      {isLoading ? (
        <h2 className="m-5">
          <Loader />
        </h2>
      ) : (
        <>{mapData(data)}</>
      )}
    </>
  );
}

export default RepositoryList;
