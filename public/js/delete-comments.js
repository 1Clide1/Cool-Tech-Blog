// to delete a comment
async function deleteCommentFormHandler(event) {
  event.preventDefault();
  //   i'm not sure how to target the actual ids to delete comments one by one so I decided to target the deletion to the blogpost id so if you want to get rid of all comments for whatever reason then this is how
  const blogpost_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(blogpost_id);
  const response = await fetch(`/api/comments/${blogpost_id}`, {
    method: "DELETE",
    body: JSON.stringify({
      // naming the var after the model to give a better readibility to where this id is coming from
      blogpost_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".delete-comment")
  .addEventListener("click", deleteCommentFormHandler);
