async function deleteFormHandler(event) {
  event.preventDefault();
  // same trick that happended for the comments can also happen here too since I need to get the id and this is a clever/dynamic way of doing so
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);
  const response = await fetch(`/api/blogpost/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      // naming the var after the model to give a better readibility to where this id is coming from
      blogpost_id: id,
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

document.querySelector(".delete").addEventListener("click", deleteFormHandler);
