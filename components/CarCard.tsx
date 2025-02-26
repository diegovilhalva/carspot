import { ListingType } from "@/@types/api.type";
import { createSlug } from "@/lib/helper";
import Link from "next/link";
import { FC } from "react";

interface CarCardProps {
    listing: ListingType;
    layout?: "grid" | "list";
  }

const CarCard:FC<CarCardProps> = ({listing,layout = "grid"}) => {
    const {$id,imageUrls,displayTitle,price,fuelType,condition,transmission,mileage,description} = listing

    const slug = createSlug(displayTitle)

  return (
    <div>
        <Link href={`/detail/${slug}/${$id}`}>
        </Link>
    </div>
  )
}

export default CarCard