"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useSelector";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

const Index: FC = () => {
  const windowHeight = useAppSelector(
    (state) => state.uiNavigation.windowHeight
  );

  return (
    <section
      id="vision-mission"
      className="section-start relative h-screen w-full snap-start p-[5%]"
    >
      <div
        className={cn(
          "flex flex-col items-center h-full justify-center gap-8",
          {
            "text-sm": windowHeight < 800,
          },
          "md:flex-row md:gap-8 md:items-center md:justify-center md:h-full"
        )}
      >
        {/* Vision */}
        <Card className="border-none backdrop-blur-sm bg-opacity-10 text-white font-semibold md:basis-1/2 md:h-1/2">
          <CardHeader>
            <CardTitle className="font-extrabold">Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To become the leading Engineering and Construction firm in South
              India and eventually India, by consistently delivering projects of
              highest quality standards while ensuring a strong commitment and
              dedication to our clients.
            </p>
          </CardContent>
        </Card>

        {/* Mission */}
        <Card className="border-none backdrop-blur-sm bg-opacity-10 text-white font-semibold md:basis-1/2 md:h-1/2">
          <CardHeader>
            <CardTitle className="font-extrabold">Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal">
              <li>
                Over the next decade, become one of the key player in
                transforming South India’s building infrastructure.
              </li>
              <li>
                On time completion of every project, delivered with highest
                quality with mechanization were possible.
              </li>
              <li>
                Commitment to achieve client satisfaction and success in every
                transaction.
              </li>
              <li>
                Become one of the well know brands in employing migrant and
                local employees.
              </li>
              <li>
                Execute every project with a focus on environment sustainability
                and reduction of carbon foot print.
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Index;
