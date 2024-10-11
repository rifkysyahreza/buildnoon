"use client";

import { FC, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/constants/testimonials";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import ReviewDialog from "./ReviewDialog";
import { useAppDispatch, useAppSelector } from "@/hooks/useSelector";
import { setIsReviewDialogOpen } from "@/lib/features/ui/uiNavigationSlice";

const TestimonialCarousel: FC = () => {
  const [selectedReview, setSelectedReview] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const isReviewDialogOpen = useAppSelector(
    (state) => state.uiNavigation.isReviewDialogOpen
  );

  // Close review dialog when user clicks outside
  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(setIsReviewDialogOpen(false));
    });
  }, [dispatch]);

  // Open full review
  const handleSeeMore = (review: string) => {
    setSelectedReview(review);
    dispatch(setIsReviewDialogOpen(true));
  };

  // Truncate 20 words of review
  const truncateReview = (review: string) => {
    const words = review.split(" ");
    if (words.length > 20) {
      return words.slice(0, 20).join(" ") + "...";
    }
    return review;
  };

  return (
    <div>
      <Carousel className="w-full md:w-screen max-w-xs md:max-w-4xl">
        <CarouselContent>
          {TESTIMONIALS.map(
            ({ image, username, rating, date, review }, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[9/16] items-center justify-center p-6">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="text-2xl">{username}</div>

                        <Image
                          src={image}
                          alt={username}
                          width={80}
                          height={80}
                          className=" rounded-full"
                        />

                        <div className="text-white text-center">
                          <div className="font-bold">{username}</div>
                          <div className="text-sm text-black">{date}</div>
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(rating)].map((_, index) => (
                              <StarIcon
                                key={index}
                                className="w-5 h-5 text-yellow-300"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-8 text-black text-center font-semibold">
                          {truncateReview(review)}
                          {review.split(" ").length > 20 && (
                            <Button onClick={() => handleSeeMore(review)}>
                              See Full Review
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Open full review */}
      {isReviewDialogOpen && <ReviewDialog review={selectedReview} />}
    </div>
  );
};

export default TestimonialCarousel;
