import connect from "./app/lib/db.js";

// espongo una funzione di nome register()
export async function register() {
  try {
    console.log("eseguito");
    await connect();
  } catch (error) {
    console.log(error);
  }
}
