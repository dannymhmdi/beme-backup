import connectToDb from "@/js-modules/connectToDb"
import { NextResponse } from "next/server"

export const GET = async() => {
try{
   const response = await connectToDb(`select count(*) from users`)
   return NextResponse.json(response)
}
catch (err) {
    console.log('faild to count users')
    throw new Error('Faild to count users')
}
}