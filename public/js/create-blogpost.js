async function createFormHandler(event) {
  event.preventDefault();
  // vars have the same name convention that the models have
  const title = document.querySelector(".blog-title").value;
  const blog_content = document.querySelector(".blog-body").value;

  const response = await fetch(`/api/blogpost`, {
    method: "POST",
    body: JSON.stringify({
      title,
      blog_content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".create-new-blog-post-form")
  .addEventListener("submit", createFormHandler);
