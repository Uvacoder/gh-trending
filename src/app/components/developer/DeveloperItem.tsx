import React from 'react';
import { DeveloperDTO } from '../../api';
import { FlameIcon, OrganizationIcon, RepoIcon } from '../../../assets/icons';

function DeveloperItem({ data }: { data: DeveloperDTO }): JSX.Element {
  const repoContent = data.popularRepository.repositoryName ? (
    <article>
      <div className="f6 color-fg-muted text-uppercase mb-1">
        <FlameIcon className="octicon octicon-flame color-fg-severe mr-1" />
        Popular repo
      </div>
      <h1 className="h4 lh-condensed">
        <a
          style={{ maxWidth: 175 }}
          href={data.popularRepository.url}
          data-view-component="true"
          className="css-truncate css-truncate-target"
        >
          <RepoIcon className="octicon octicon-repo color-fg-muted mr-1" />
          {data.popularRepository.repositoryName}
        </a>
      </h1>
      <div className="f6 color-fg-muted mt-1">
        {data.popularRepository.description}
      </div>
    </article>
  ) : (
    <p className="mb-3 d-flex flex-items-center">
      <OrganizationIcon className="octicon octicon-organization color-fg-muted mr-2" />
      <span className="color-fg-muted">No popular repository</span>
    </p>
  );

  return (
    <article className="Box-row d-flex" id={`pa-${data.username}`}>
      <a
        style={{ width: 16 }}
        href={`#pa-${data.username}`}
        data-view-component="true"
        className="color-fg-muted f6"
      >
        {data.rank}
      </a>
      <div className="mx-3">
        <a href={data.url} target="_blank" rel="noreferrer">
          <img
            className="rounded avatar-user"
            loading="lazy"
            src={data.avatar}
            width="48"
            height="48"
            alt="@rix0rrr"
          />
        </a>
      </div>

      <div className="d-sm-flex flex-auto">
        <div className="col-sm-8 d-md-flex">
          <div className="col-md-6">
            <h1 className="h3 lh-condensed">
              <a href={data.url} target="_blank" rel="noreferrer">
                {data.name}
              </a>
            </h1>

            <p className="f4 text-normal mb-1">
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="Link--secondary"
              >
                {data.username}
              </a>
            </p>
          </div>

          <div className="col-md-6">
            <div className="mt-2 mb-3 my-md-0">{repoContent}</div>
          </div>
        </div>

        <div className="col-sm-4 d-flex flex-sm-justify-end ml-sm-3">
          <div className="user-profile-following-container">
            <div className="user-following-container">
              <span className="user-following-container js-form-toggle-container">
                <button
                  type="button"
                  className="btn btn-sm btn-block"
                  title={`Follow ${data.name}`}
                  aria-label="Follow this person"
                  onClick={(e) => e.preventDefault()}
                >
                  Follow
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default DeveloperItem;
