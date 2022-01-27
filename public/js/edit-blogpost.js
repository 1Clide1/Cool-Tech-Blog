async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector(".blog-title").value;
  const blog_content = document.querySelector(".blog-body").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);
  const response = await fetch(`/api/blogpost/${id}`, {
    method: "PUT",
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
  .querySelector(".edit-blog-post-form")
  .addEventListener("submit", editFormHandler);
