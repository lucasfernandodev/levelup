import { createServer } from "http";
import { randomUUID } from "crypto";
import { once } from "events";

const Database = new Map();



function responseJson(data, response) {
  return response.end(JSON.stringify(data));
}

async function handler(request, response) {
  const { method } = request;

  if (method === "GET") {
    return responseJson([...Database.values()], response);
  }

  if (method === "POST") {
    const body = JSON.parse(await once(request, "data"));
    console.log("Recebido", body);
    const id = randomUUID();
    Database.set(id, body);
    return responseJson({ ok: 1 }, response);
  }

  if (method === "DELETE") {

    let id = "teste";
    let userTest = {
      name: "Lucas Fernando",
      age: "21"
    }
    Database.set(id, userTest);


    const body = JSON.parse(await once(request, "data"));

    if (Database.has(body.id) == true) {
      Database.delete(body.id);
      return responseJson({ ok: 1 }, response);
    } else {
      return responseJson({ error: 1 }, response);
    }
  }
}

export default createServer(handler);
