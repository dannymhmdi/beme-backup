export const reload = async (userId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/userData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
      cache: "no-store",
    });
    const json = await response.json();
    return [json.data, json.status];
  } catch (error) {
    throw new Error("faild to reload");
  }
};
