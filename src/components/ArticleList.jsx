import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    console.log(posts);
    const articleElements = posts.map(post =>{
        return <
        Article 
        title={post.title}
        date={post.date}
        preview={post.preview}
         key={post.id}/>
    })

    return(
        <>
            <main>
                {articleElements}
            </main>
        </>
    )
}
export default ArticleList;