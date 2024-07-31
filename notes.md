## Props Basic.
- use props to make reusable component templeates.
- to understand how props are passed tot a component.

 A componenet is a fucntion that takes props as an argument and returns JSX.
  
1. BlogContent - contains the content of the blog post.
2. Comment - contains one user's comment.
3. BlogPost - the top level React component which is responsible for rendering both BlogContent and Comment.

### making components dynamic.
React allows to pass informtion form parant to child components. we call these props.
n/b the syntax for creating props for a React Component is the same as the syntax for writing attributes for an HTML tag.
for Example 
 1. <BlogComment article="Dear Reader: Go watch Bridgerton!"/>
 (article=" Dear Reader: Go watch Bridgerton!") is prop.

### passing information.
 Sharing this passed information to a child componenet is as follows

 <function parentComponent(){
    return < childComponent article="hello" number={2+3}/>
 } 
 >
 <function childComponent(props){
    return (
        <div>
        {props.text} {props.number}
        </div>
    );
 }>

 note that we can have props as any data type.

 ### Props.
 - the only way for a parent to pass information to a child component is by  props.
 - when the child component BlogComment is passed in the parent Component BlogPost
- we add a prop to the passed child component article="Dear Reader: ....."
- note props that have srring values we do not need to use curly braces, however for other data types 
- like boolean,numbers,objects we need to use curly braces.
  - 