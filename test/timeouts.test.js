import MoviesDAO from "../src/dao/moviesDAO"

describe("Timeouts", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Timeout is set to 2500 milliseconds", async () => {
    const response = await MoviesDAO.getConfiguration()
    console.log(response)
    expect(response.wtimeout).toBe(2500)
  })
})
