import {jest, expect, test, describe} from "@jest/globals"
import superTest from "supertest";
import Server from "../../src/server.js";

describe("API 2E2 Test Suite", () => {

  test("GET / - Should return an array", async () => {
    const response = await superTest(Server).get("/");
    const data = JSON.parse(response.text);
    expect(data).toBeInstanceOf(Array);
    expect(data.length).toEqual(0);
    console.log(response.text)
  });

  test("POST / - Should sava an item and return ok", async () => {
    const response = await superTest(Server).post("/").send({
      name: "Lucas Fernando",
      age: 21
    });
    
    const expectedResponse = {ok: 1};

    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  });

  test("DELETE / - Should sava an item and return ok", async () => {
    const response = await superTest(Server).del("/").send({id: "teste"});
    console.log("Ler",JSON.parse(response.text) )
    const expectedResponse = {ok: 1};

    expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
  });
})