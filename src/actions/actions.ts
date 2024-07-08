'use server'
export async function createpostla(formData:FormData){

    const title=formData.get("title") as string;
    console.log(title)
    //adding to db or updating for db
}