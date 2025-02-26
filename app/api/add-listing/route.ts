import { APP_CONFIG } from "@/lib/app-config";
import { createSessionClient } from "@/lib/appwrite";
import { listingBackendSchema } from "@/validations/listing.validation";
import { NextRequest, NextResponse } from "next/server";
import { ID } from "node-appwrite";

export async function POST(req:NextRequest){
    try {
        const body = await req.json()
        const validateData = listingBackendSchema.parse(body)
        const {shopId} = validateData
        const {account,databases} = await createSessionClient()
        const user = await account.get()

        const shop = await databases.getDocument(
            APP_CONFIG.APPWRITE.DATABASE_ID,
            APP_CONFIG.APPWRITE.SHOP_ID,
            shopId
        )

        if(!shop || shop.userId  !== user.$id){
            return NextResponse.json({error:"Invalid shop ID"},{status:400})
        }

        const carListing = await databases.createDocument(
            APP_CONFIG.APPWRITE.DATABASE_ID,
            APP_CONFIG.APPWRITE.CART_LISTING_ID,
            ID.unique(),
            {
                ...validateData,
                yearOfManufacture:Number(validateData.yearOfManufacture),
                userId:user.$id,
                shop:shop.$id
            }

        )

        return NextResponse.json({
            message: "Car listing created successfully",
            data: carListing,
          });
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}