import React from 'react';

class BlogPost extends React.Component {
    render() {
        const title = this.props.location.state.title
        console.warn(title)
        return <div>{title}</div>
    }
}

export default BlogPost;