export async function getLaunchDetails(id: string) {
  // To do: add error handling (check 'getLaunchList' for error handling implementation)

  const response = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
    method: "GET",
  });

  return response.json();
}
