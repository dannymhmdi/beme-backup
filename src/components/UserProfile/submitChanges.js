export const submitChanges = async ({body,setLoading,setAlert,setIsEditActive}) => {
    try {
        const response = await fetch(`http://localhost:3000/api/userData`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
          cache: "no-store",
        });
        const json = await response.json();
        setLoading(false);
        if (json.status) {
          setAlert((prev) => ({
            ...prev,
            status: true,
            message: json.message,
            success: json.success,
          }));
          setIsEditActive(false);
        } else {
          setAlert((prev) => ({
            ...prev,
            status: true,
            message: json.message,
          }));
        }
      } catch (error) {
        console.log(error);
      }

}