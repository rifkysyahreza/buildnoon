"use client";

import useFetchTeams from "@/hooks/useFetchTeams";
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const TeamsCard = () => {
  const { data } = useFetchTeams();

  return (
    <div className="flex items-center justify-center w-screen overflow-x-hidden flex-wrap gap-2">
      {data.map((team, index) => {
        const { name, picture } = team;
        const { large } = picture;
        const { first, last } = name;

        // console.log(team);
        return (
          <Card
            key={index}
            className="max-w-[40vw] md:max-w-[10vw] h-full grow-0 basis-full"
          >
            <CardContent>
              <div key={index} className="bg-white m-4">
                <Image
                  src={large}
                  alt="profile image"
                  width={1000}
                  height={1000}
                ></Image>
                <div className="h-10">{first + " " + last}</div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TeamsCard;
