import React from "react";
import { Star } from "lucide-react";
import { Listing } from "../types";
import { useRouter } from "next/navigation";
import { FavoriteButton } from "../components/product/FavoriteButton";

interface ListingCardProps {
  data: Listing;
  onClick: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (e: React.MouseEvent) => void;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  onClick,
  isWishlisted,
  onToggleWishlist,
}) => {
  const router = useRouter();

  const handleClick = () => {
    onClick();
    router.push(`/produto/${data.id}`);
  };

  return (
    <div onClick={handleClick} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <img
            src={data.images[0]}
            alt={data.title}
            className="object-cover h-full w-full group-hover:scale-105 transition duration-300"
          />
          <div
            className="absolute top-3 right-3 cursor-pointer"
            onClick={onToggleWishlist}
          >
            {/* Mantém visual antigo mas usa FavoriteButton para estado global */}
            <FavoriteButton listingId={data.id} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-start mt-1">
          <div className="font-semibold text-sm line-clamp-1 text-[#484848]">
            {data.location}
          </div>
          <div className="flex flex-row items-center gap-1 text-sm text-[#484848]">
            <Star size={14} className="fill-[#484848]" />
            <span>{data.rating}</span>
          </div>
        </div>
        <div className="font-light text-neutral-500 text-sm">
          {data.distance}
        </div>
        <div className="font-light text-neutral-500 text-sm">
          {data.dates}
        </div>
        <div className="flex flex-row items-center gap-1 mt-1">
          <div className="font-semibold text-sm text-[#484848]">
            {new Intl.NumberFormat("pt-MZ", {
              style: "currency",
              currency: "MZN",
              maximumFractionDigits: 0,
            }).format(data.price)}
          </div>
          <div className="font-light text-sm text-neutral-500">
            / dia
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;