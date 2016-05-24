import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';



export default (
     <Route path="/" component={App}> 
          // IndexRoute method adds component to index page
          <IndexRoute component={PostsIndex} />
     </Route>
);