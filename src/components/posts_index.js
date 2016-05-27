/*
     calling action creator to fetch posts, componentWillMount life cycle method to fetch data for us on page load
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
     componentWillMount() {
          this.props.fetchPosts();
     }
     
     render() {
          return (
               <div>
                    <div className="text-xs-right">
                         <Link to="/posts/new" className="btn btn-primary">
                              Add a Post
                         </Link>
                    </div>
                    List of Blog Posts
               </div>
          );
     }
}

// access to this.props.fetchPosts

//function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ fetchPosts }, dispatch);
//}

//export default connect(null, mapDispatchToProps)(PostsIndex);

export default connect(null, { fetchPosts })(PostsIndex);