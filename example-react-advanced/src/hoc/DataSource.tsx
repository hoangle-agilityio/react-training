export const DataSource = {
  getCategory: (id: number) => {
    return {
      id,
      name: "Test Category",
    }
  },
  getPost: (id: number) => {
    return {
      id,
      name: "Test Post",
      content: "Test Content Post",
    }
  }
}
