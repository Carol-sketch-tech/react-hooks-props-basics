import React from "react";

function BlogContent({articleText, isPublished, minutesToRead}) {

  if(!props.isPublished){
    return null
  }else{
    
  return (<div id="blog-content">
    <h2>{props.articleText}</h2>
    <p>{props.minutesToRead} minutes to read</p>
  </div>)
}}

export default BlogContent;
// the working above display conditiona rendering.
