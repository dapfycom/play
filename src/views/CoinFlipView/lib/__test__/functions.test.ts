import { getTopVolume } from "../functions";

describe("getTopVolume", () => {
  const usersVolume = [
    { address: "user1", volume: "100" },
    { address: "user2", volume: "200" },
    { address: "user3", volume: "50" },
    {
      address: "user5",
      volume: "3000000000000000000000000000000000000000000000000000000000000",
    },
    { address: "user6", volume: "10000000000000000000000000000000000000" },
    { address: "user4", volume: "300" },
    { address: "user7", volume: "100" },
    { address: "user8", volume: "500" },
    { address: "user9", volume: "5000" },
    { address: "user10", volume: "560" },
  ];

  test("should return top users by volume", () => {
    const topUsers = getTopVolume(usersVolume, 3);
    expect(topUsers).toEqual([
      {
        address: "user5",
        volume: "3000000000000000000000000000000000000000000000000000000000000",
      },
      { address: "user6", volume: "10000000000000000000000000000000000000" },
      { address: "user9", volume: "5000" },
    ]);
  });

  test("should return top users with default count", () => {
    const topUsers = getTopVolume(usersVolume);
    expect(topUsers).toEqual([
      {
        address: "user5",
        volume: "3000000000000000000000000000000000000000000000000000000000000",
      },
      { address: "user6", volume: "10000000000000000000000000000000000000" },
      { address: "user9", volume: "5000" },
      { address: "user10", volume: "560" },
      { address: "user8", volume: "500" },
      { address: "user4", volume: "300" },
      { address: "user2", volume: "200" },
      { address: "user1", volume: "100" },
      { address: "user7", volume: "100" },
      { address: "user3", volume: "50" },
    ]);
  });

  test("should handle empty input", () => {
    const topUsers = getTopVolume([], 5);
    expect(topUsers).toEqual([]);
  });

  test("should handle input with fewer users than countToReturn", () => {
    const topUsers = getTopVolume(usersVolume, 20);
    expect(topUsers).toEqual([
      {
        address: "user5",
        volume: "3000000000000000000000000000000000000000000000000000000000000",
      },
      { address: "user6", volume: "10000000000000000000000000000000000000" },
      { address: "user9", volume: "5000" },
      { address: "user10", volume: "560" },
      { address: "user8", volume: "500" },
      { address: "user4", volume: "300" },
      { address: "user2", volume: "200" },
      { address: "user1", volume: "100" },
      { address: "user7", volume: "100" },
      { address: "user3", volume: "50" },
    ]);
  });
});
