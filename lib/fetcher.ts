import { ALLCarListingPayloadType, ListingType, LoginType, RegisterType } from "@/@types/api.type"
import axios from "axios"

export const registerMutationFn = async (data: RegisterType) => await axios.post("/api/register", data);


export const loginMutationFn = async (data: LoginType) => await axios.post("/api/login", data)

export const getCurrentUserQueryFn = async () => {
    const response = await axios.get("/api/current-user")
    return response.data
}

export const logoutMutationFn = async () => await axios.post("/api/logout")

export const addListingMutationFn = async (data: ListingType) => await axios.post("/api/add-listing", data)

export const getMyShopQueryFn = async () => {
    const response = await axios.get("/api/shop/my-shop")
    return response.data
}

export const getAllCarListingQueryFn = async ({ brand, model, color, condition, keyword, price, year_max, year_min, fuelType }: ALLCarListingPayloadType) => {
    const baseUrl = `/api/listing`
    const queryParams = new URLSearchParams()

    if (brand && brand.length !== 0) queryParams.append("brand", brand.join(","))
    if (model && model.length !== 0) queryParams.append("model", model.join(","))
    if (color && color.length !== 0) queryParams.append("color", color.join(","))

    if (fuelType && fuelType.length !== 0)
        queryParams.append("fuelType", fuelType.join(","))

    if (condition && condition.length !== 0)
        queryParams.append("condition", condition.join(","))
    if (price) queryParams.append("price", price)
    if (keyword) queryParams.append("keyword", keyword)
    if (year_min) queryParams.append("year_min", year_min?.toString())
    if (year_max) queryParams.append("year_max", year_max?.toString())

    const url = queryParams.toString() ? `${baseUrl}?${queryParams}` : baseUrl

    const response = await axios.get(url)

    return  response.data
}

