// this is for the blogpost handlebars because that is where the comment section is located in
async function commentFormHandler(event) {
  event.preventDefault();
  // there is a cool trick with this that i found out is that you can select not only the textarea but the specific name of using an array not sure if I specifcally need that here but it was cool to find out
  const comment_text = document.querySelector("textarea").value.trim();
  // this right here is a way to get the id of the blogpost
  //  the way this is done is actually throught the address bar since they all end in the id of the blogpost
  // essentially just chop up the address bar until you get to the part with the id and boom you got the id of the blogpost and with that the comment will be saved to that specific blog
  const blogpost_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(blogpost_id);
  if (comment_text) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        blogpost_id,
        comment_text,
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
}
// this is how the function is called selects the form it is using and then the button type followed by the actual function
document
  .querySelector(".comment-section-form")
  .addEventListener("submit", commentFormHandler);
