"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import ServicesListDialog from "./ServicesListDialog";
import { SERVICES_LIST } from "@/constants/servicesList";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import { setIsDescriptionDialogOpen } from "@/lib/features/ui/uiNavigationSlice";
import Autoplay from "embla-carousel-autoplay";

const ServicesListCarousel: FC = () => {
  const [selectedDescription, setSelectedDescription] = useState<string | null>(
    null
  );
  const dispatch = useAppDispatch();

  const isDescriptionDialogOpen = useAppSelector(
    (state) => state.uiNavigation.isDescriptionDialogOpen
  );

  // Close description dialog when user clicks outside
  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(setIsDescriptionDialogOpen(false));
    });
  }, [dispatch]);

  // Open full description
  const handleSeeMore = (description: string) => {
    setSelectedDescription(description);
    dispatch(setIsDescriptionDialogOpen(true));
  };

  // Truncate 20 words of description
  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return description;
  };

  return (
    <div>
      <Carousel
        className="w-full md:w-screen max-w-xs md:max-w-7xl"
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
      >
        <CarouselContent>
          {SERVICES_LIST.map(({ title, image, description }, index) => (
            <CarouselItem key={index} className="md:basis-1/4">
              <div className="p-1">
                <Card className="w-full">
                  <CardContent className="flex aspect-[9/16] items-center justify-center p-6">
                    <div className="flex flex-col items-center justify-between gap-10">
                      <div>{title}</div>
                      <Image
                        src={image}
                        width={100}
                        height={100}
                        alt={title}
                      ></Image>
                      <div className="h-36">
                        {truncateDescription(description)}
                      </div>
                      {description.split(" ").length > 20 && (
                        <Button onClick={() => handleSeeMore(description)}>
                          See Full Description
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Open full review */}
      {isDescriptionDialogOpen && (
        <ServicesListDialog description={selectedDescription} />
      )}
    </div>
  );
};

export default ServicesListCarousel;
