const request = require("supertest");
const app = require("../app");

describe("Expense API", () => {
  it("should get all expenses", async () => {
    const res = await request(app).get("/api/expenses");
    expect(res.statusCode).toBe(200);
  });
});
