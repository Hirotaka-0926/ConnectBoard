export const getThreads = async () => {
  const response = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response;
};

export const postNewThread = async (title: string) => {
  console.log("start postNewThread");
  const response = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    }
  );
  if (response.ok) {
    console.log("title : " + title);
  }
};

export const fetchPosting = async (id: string) => {
  const response = await fetch(
    `https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response;
};

export const putPosting = async (id: string, newPost: string) => {
  try {
    console.log("id : " + id + " , post : " + newPost);

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        post: newPost,
      }),
    };

    const response = await fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`,
      option
    );

    console.log(response);
  } catch (e) {
    console.error(e);
  }
};
