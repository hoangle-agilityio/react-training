import { cleanup } from "@testing-library/react";
import User from "../../interfaces/user";
import { searching } from "../search-helper";

describe('Search Helper', () => {
  afterEach(cleanup);

  const user: User = {
    id: 1,
    name: "Paul",
    email: "paul@gmail.com",
  };

  it('should filter username with value entered', () => {
    // Equals false if no value is found
    expect(searching(user, "S")).toBe(false);

    // Equals true if the value is found
    expect(searching(user, "P")).toBe(true);
  });
});
