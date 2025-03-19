import { SidebarMenuItem } from "@/Types";

// Fetch sidebar data from the API
export async function fetchSidebarData(): Promise<SidebarMenuItem[]> {
  try {
    // Make sure to use the correct API path
    const response = await fetch('/api/sidebar', {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    if (!response.ok) {
      throw new Error(`Error fetching sidebar data: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch sidebar data:', error);
    throw error;
  }
}

// Update sidebar data through the API
export async function updateSidebarData(data: SidebarMenuItem[]): Promise<{ message: string }> {
  try {
    const response = await fetch('/api/sidebar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error updating sidebar data: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to update sidebar data:', error);
    throw error;
  }
}
