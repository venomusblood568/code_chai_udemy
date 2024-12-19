function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve("Post Data Fetched!!")
        },2000);
    })
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched!!");
    }, 4000);
  });
}

async function getblogdata() {
    try {
        console.log("Fetching blog data");
        const[PostData,CommentData] = await Promise.all([fetchCommentData(),fetchPostData()])
        console.log(PostData,CommentData)
        console.log("Fetch Complete")
    } catch (error) {
        console.log("Error Fecthing Blog data",error);
    }
}

getblogdata()