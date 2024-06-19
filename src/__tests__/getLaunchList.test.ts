import { getLaunchList } from "@/api/getLaunchList";
import { Launch } from "@/types/types";
import { launchExample } from "@/utils/launchListExample";
import { jest } from "@jest/globals";

// Mock the global fetch function
global.fetch = jest.fn(
  (): Promise<Response> =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([launchExample]),
    } as Response)
) as jest.MockedFunction<typeof fetch>;

// Test for successful data fetching
test("fetches launch data correctly", async () => {
  (global.fetch as jest.Mock).mockImplementationOnce(
    (): Promise<Response> =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([launchExample]),
      } as Response)
  );

  const launches: Launch[] = await getLaunchList();

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith("https://api.spacexdata.com/v5/launches", {
    method: "GET",
  });

  expect(launches).toEqual([launchExample]);
});

// Test for network errors
test("handles network error gracefully", async () => {
  (global.fetch as jest.Mock).mockImplementationOnce(
    (): Promise<Response> => Promise.reject(new Error("Network error"))
  );

  await expect(getLaunchList()).rejects.toThrow("Network error");

  expect(fetch).toHaveBeenCalledTimes(2);
  expect(fetch).toHaveBeenCalledWith("https://api.spacexdata.com/v5/launches", {
    method: "GET",
  });
});
