import React, { Suspense, ComponentType } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Loader } from '../loader';

export interface ContainerItem {
  link: string;
  title: string;
  component: ComponentType;
}

function Container({ items }: { items: ContainerItem[] }): JSX.Element {
  const [links, routes] = items.reduce(
    ([prevLinks, prevRoutes], item, index) => {
      prevLinks.push(
        <NavLink
          key={index.toString()}
          className="js-selected-navigation-item subnav-item"
          activeClassName="selected"
          to={item.link}
          exact={item.link === '/'}
        >
          {item.title}
        </NavLink>,
      );
      prevRoutes.push(
        <Route
          key={index.toString()}
          exact={item.link === '/'}
          path={item.link}
          component={item.component}
        />,
      );
      return [prevLinks, prevRoutes];
    },
    [[], []] as [JSX.Element[], JSX.Element[]],
  );
  return (
    <div className="position-relative container-lg p-responsive pt-6">
      <div className="Box">
        <div className="Box-header d-md-flex flex-items-center flex-justify-between">
          <nav className="subnav mb-0" aria-label="Trending" data-pjax="">
            {links}
          </nav>
        </div>
        <div>
          <Suspense fallback={<Loader />}>
            <Switch>{routes}</Switch>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Container;
