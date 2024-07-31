import React from "react";
import BlogContent from "./BlogContent";
import Comment from "./Comment";

function BlogPost() {
  return (
    <div id="blog-post">
      <BlogContent articleText="Dear Reader: Bjarne Stroustrup has the perfect lecture oration." 
                 isPublished={true} minutesToRead={5}/>
      <Comment commentText="I agree with this statement. - Angela Merkel" />
      <Comment commentText="A universal truth. - Noam Chomsky" />
      <Comment commentText="Truth is singular. Its ‘versions’ are mistruths. - Sonmi-451" />
    </div>
  );
}

export default BlogPost;
// when the child component BlogComment is passed in the parent Component BlogPost
// we add a prop to the passed child component article="Dear Reader: ....."
// note props that have srring values we do not need to use curly braces, however for other data types 
// like boolean,numbers,objects we need to use curly braces.