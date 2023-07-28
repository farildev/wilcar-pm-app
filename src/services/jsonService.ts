const JSON_SERVER_URL = "http://localhost:3001";

export async function readDataFromJson() {
  try {
    const response = await fetch(`${JSON_SERVER_URL}/products`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error reading data from JSON file:", error);
    return null;
  }
}

export async function writeDataToJson(data) {
  try {
    await fetch(`${JSON_SERVER_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return true;
  } catch (error) {
    console.error("Error writing data to JSON file:", error);
    return false;
  }
}