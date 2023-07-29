const baseUrl = "http://localhost:3001";

export async function getProducts() {
  try {
    const response = await fetch(`${baseUrl}/products`);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function addProduct(data: any) {
  try {
    const response = await fetch(`${baseUrl}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to add product.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
}


export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete product.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
}

export async function updateProduct(id: string, data: any) {
  try {
    const response = await fetch(`${baseUrl}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to update product.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
}