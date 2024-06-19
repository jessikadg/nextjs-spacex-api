import { Launch } from "@/types/types";

export async function getLaunchList() {
  try {
    const response = await fetch(`https://api.spacexdata.com/v5/launches`, {
      method: "GET",
    });

    const launchList: Launch[] = await response.json();

    return launchList;
  } catch (error) {
    console.error("Error fetching launch list:", error);

    throw error;
  }
}
