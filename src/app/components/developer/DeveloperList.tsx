import React from 'react';
import { getDevelopers, DeveloperDTO } from '../../api';
import DeveloperItem from './DeveloperItem';
import { Loader } from '../loader';

function DeveloperList(): JSX.Element {
  const { status, data, error, isLoading } = getDevelopers();
  const mapData = (items?: DeveloperDTO[]) =>
    items?.map((item) => <DeveloperItem key={item.url} data={item} />);
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

export default DeveloperList;
