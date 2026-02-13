import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "../../lib/utils";

type CarouselOrientation = "horizontal" | "vertical";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: CarouselOrientation;
}

type CarouselApi = UseEmblaCarouselType[1];

const CarouselContext = React.createContext<{
  api: CarouselApi;
  orientation: CarouselOrientation;
}>({
  api: undefined,
  orientation: "horizontal",
});

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, orientation = "horizontal", ...props }, ref) => {
    const [emblaRef, api] = useEmblaCarousel({
      axis: orientation === "horizontal" ? "x" : "y",
      dragFree: false,
      loop: false,
    });

    return (
      <CarouselContext.Provider value={{ api, orientation }}>
        <div ref={ref} className={cn("relative", className)} {...props}>
          <div ref={emblaRef} className="overflow-hidden">
            <div
              className={cn(
                "flex",
                orientation === "horizontal" ? "-ml-2" : "-mt-2 flex-col"
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex", className)} {...props} />
  )
);
CarouselContent.displayName = "CarouselContent";

interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("min-w-0 flex-[0_0_100%] pl-2", className)}
      {...props}
    />
  )
);
CarouselItem.displayName = "CarouselItem";

interface CarouselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(({ className, children, ...props }, ref) => {
  const { api, orientation } = React.useContext(CarouselContext);

  const handleClick = () => {
    api?.scrollPrev();
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      className={cn(
        "absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm",
        orientation === "horizontal"
          ? "left-3 top-1/2 -translate-y-1/2"
          : "left-1/2 top-3 -translate-x-1/2",
        className
      )}
      {...props}
    >
      {children ?? "‹"}
    </button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, CarouselButtonProps>(
  ({ className, children, ...props }, ref) => {
    const { api, orientation } = React.useContext(CarouselContext);

    const handleClick = () => {
      api?.scrollNext();
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "absolute z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/35 text-white backdrop-blur-sm",
          orientation === "horizontal"
            ? "right-3 top-1/2 -translate-y-1/2"
            : "bottom-3 left-1/2 -translate-x-1/2",
          className
        )}
        {...props}
      >
        {children ?? "›"}
      </button>
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
};

