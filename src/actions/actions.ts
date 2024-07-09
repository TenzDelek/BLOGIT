"use server";
export async function createpostla(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string; // currently we are saying it is string , but we have to be carefull with this we can use zod for validation
  console.log(title, body);
  //adding to db or updating for db
}
