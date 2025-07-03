import React from "react";
import { ProfileCard } from "../lyxui/profile";

const ProfileDemo = () => {
  const profileData = {
    name: "Ethan Rodrigues",
    title: "Designer and developer for Lyx UI",
    avatar: "/images/pfp.webp",
    isPro: true,
    calurl: "https://cal.com/ethan-rodrigues/30min?overlayCalendar=true",
    email: "ethanrodrigues25@gmail.com",
    stats: {
      earned: "$25k+",
      hired: "9x",
      rating: 5.0,
      followers: 1,
    },
  };
  return <ProfileCard {...profileData} />;
};

export { ProfileDemo };
