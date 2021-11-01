import React, { lazy } from 'react';
import { Header, Container, Footer } from './components';

const RepositoryList = lazy(
  () => import('./components/repository/RepositoryList'),
);
const DeveloperList = lazy(
  () => import('./components/developer/DeveloperList'),
);

function App(): JSX.Element {
  const items = [
    { title: 'Repositories', link: '/', component: RepositoryList },
    { title: 'Developers', link: '/developer', component: DeveloperList },
  ];

  return (
    <div className="application-main">
      <Header />
      <Container items={items} />
      <Footer />
    </div>
  );
}

export default App;
