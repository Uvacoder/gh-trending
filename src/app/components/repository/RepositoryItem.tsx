import React, { Fragment } from 'react';
import { RepositoryDTO } from '../../api';
import { StartIcon, RepoIcon, ForkIcon } from '../../../assets/icons';

function RepositoryItem({ data }: { data: RepositoryDTO }): JSX.Element {
  const avatars = data.builtBy.map((item) => (
    <Fragment key={item.username}>
      {' '}
      <a
        className="d-inline-block"
        href={item.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="avatar mb-1 avatar-user"
          src={item.avatar}
          loading="lazy"
          width="20"
          height="20"
          alt={item.username}
        />
      </a>{' '}
    </Fragment>
  ));
  return (
    <article className="Box-row">
      <div className="float-right d-flex">
        <div className="js-toggler-container js-social-container starring-container d-block">
          <button
            onClick={(e) => e.preventDefault()}
            type="button"
            className="js-toggler-target btn-sm btn"
          >
            <StartIcon className="octicon octicon-star mr-0 mr-md-1" />
            <span className="d-none d-md-inline">Star</span>
          </button>
        </div>
      </div>

      <h1 className="h3 lh-condensed">
        <a href={data.url} target="_blank" rel="noreferrer">
          <RepoIcon className="octicon octicon-repo mr-1 color-fg-muted" />{' '}
          <span className="text-normal">{data.username} /</span>{' '}
          {data.repositoryName}
        </a>
      </h1>

      <p className="col-9 color-fg-muted my-1 pr-4">{data.description}</p>

      <div className="f6 color-fg-muted mt-2">
        <span className="d-inline-block ml-0 mr-3">
          <span
            className="repo-language-color"
            style={{ backgroundColor: '#f34b7d' }}
          />
          <span itemProp="programmingLanguage">{data.language}</span>
        </span>
        <a
          href={`${data.url}/stargazers`}
          target="_blank"
          rel="noreferrer"
          className="Link--muted d-inline-block mr-3"
        >
          <StartIcon className="octicon octicon-star" />
          {` ${data.totalStars.toLocaleString()} `}
        </a>
        <a
          href={`${data.url}/network/members.${data.repositoryName}`}
          target="_blank"
          rel="noreferrer"
          className="Link--muted d-inline-block mr-3"
        >
          <ForkIcon className="octicon octicon-repo-forked" />
          {` ${data.forks.toLocaleString()} `}
        </a>
        <span className="d-inline-block mr-3">
          {' Built by '}
          {avatars}
        </span>
        <span className="d-inline-block float-sm-right">
          <StartIcon className="octicon octicon-star" />
          {` ${data.starsSince.toLocaleString()} stars today `}
        </span>
      </div>
    </article>
  );
}

export default RepositoryItem;
