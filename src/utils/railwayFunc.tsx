export const getList = async () => {
  const response = await fetch(
    "https://railway.bulletinboard.techtrain.dev/threads"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response;
};
