"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";
import { cn } from "../../lib/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" as const },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export interface PropertyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  name: string;
  location: string;
  description?: string;
  price: number;
  rating: number;
  reviews?: number;
  imageAlt?: string;
  /** Badge "VENDA" ou "ALUGUER" - apenas para imóveis */
  status?: "venda" | "aluguer";
  /** Formato do preço: "X MZN /mês" para aluguer */
  priceSuffix?: string;
  /** Slot para botão favorito ou outro overlay */
  topRightSlot?: React.ReactNode;
  /** Slot para badge extra (ex: badges custom) */
  topLeftSlot?: React.ReactNode;
}

const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  (
    {
      className,
      imageUrl,
      name,
      location,
      description,
      price,
      rating,
      reviews = 0,
      imageAlt = "Property Image",
      status,
      priceSuffix = "/mês",
      topRightSlot,
      topLeftSlot,
      ...props
    },
    ref
  ) => {
    const formattedPrice = new Intl.NumberFormat("pt-MZ", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

    return (
      <div ref={ref} {...props} className={cn("w-full max-w-sm", className)}>
        <motion.div
          className="group h-full overflow-hidden rounded-xl border border-[#484848]/10 bg-white text-[#484848] shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03, y: -5 }}
        >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="h-60 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          {topLeftSlot && (
            <div className="absolute top-2 left-2 z-10">{topLeftSlot}</div>
          )}
          {topRightSlot && (
            <div className="absolute top-2 right-2 z-10">{topRightSlot}</div>
          )}
        </div>

        {/* Content Section - título e descrição em baixo */}
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <motion.h3
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-lg font-semibold tracking-tight text-[#484848] line-clamp-1"
            >
              {name}
            </motion.h3>
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: "0.1s" }}
              className="text-lg font-bold text-[#FF585D] shrink-0"
            >
              {formattedPrice} MZN
              {status === "aluguer" && (
                <span className="text-sm font-normal text-[#484848]/60">
                  {" "}
                  {priceSuffix}
                </span>
              )}
            </motion.p>
          </div>

          {description && (
            <motion.p
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: "0.15s" }}
              className="text-sm text-[#484848]/60 line-clamp-2"
            >
              {description}
            </motion.p>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-[#484848]/70">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: "0.2s" }}
              className="flex items-center gap-1.5"
            >
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="truncate">{location}</span>
            </motion.div>
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ transitionDelay: "0.3s" }}
              className="flex items-center gap-1.5 shrink-0"
            >
              <Star className="h-4 w-4 fill-[#484848] text-[#484848]" />
              <span className="font-medium text-[#484848]">{rating}</span>
              {reviews > 0 && (
                <span>({reviews.toLocaleString()} avaliações)</span>
              )}
            </motion.div>
          </div>
        </div>
        </motion.div>
      </div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export { PropertyCard };
