import React, {Component} from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';

class Blog extends Component {

  state = {
    posts: null
  }

  componentDidMount(){

    const client = contentful.createClient({
      space: 'ugta3yxklyl6',
      accessToken: 'soYLArASTnNkUi1hAKScJjNBzp-PO6wXp899l8ncDy8'
    })

    client.getEntries().then(entries => {
      entries.items && this.setState({posts: entries.items})
    })

  }

  render(){
    return (
        <div>
            { 
            !this.state.posts ? <span>loading posts</span> :
            <div>
                {
                this.state.posts.map( ({fields}, i) => 
                    <BlogItem key={i} {...fields}></BlogItem>
                )
                }
            </div> 
            }
        </div>
        
    )
  }
   
}

export default Blog;