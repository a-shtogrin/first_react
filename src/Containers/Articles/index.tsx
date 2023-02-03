import React from 'react';
import { ArticleList } from 'Components/Articles';
import { CheckAuth } from 'Components/Common/CheckAuth';

export const Articles = () => {
  return (
    <CheckAuth>
      <ArticleList />
    </CheckAuth>
  );
};
