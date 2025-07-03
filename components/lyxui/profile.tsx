import React from "react";
import { Star, MailIcon } from "lucide-react";
import Link from "next/link";

interface ProfileCardProps {
  name: string;
  title: string;
  avatar: string;
  isPro: boolean;
  calurl: string;
  email: string;
  stats: {
    earned: string;
    hired: string;
    rating: number;
    followers: number;
  };
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  avatar,
  isPro,
  calurl,
  email,
  stats,
}) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-8 max-w-md mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Avatar and Status Section */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-20 h-20 rounded-full object-cover border-4 border-background shadow-lg"
          />
          {/* Online status indicator */}
          <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
        </div>

        <div className="flex flex-col gap-2">
          {/* Pro Badge */}
          {isPro && (
            <div className="bg-foreground text-background px-1 py-[0.1rem] rounded text-xs font-semibold w-fit">
              PRO
            </div>
          )}

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-green-600 text-sm font-medium bg-green-400/20 py-1 px-2 rounded-full shadow-sm hover:bg-green-200 transition-colors">
            <span>Available</span>
          </div>
        </div>
      </div>

      {/* Name and Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">{name}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">{title}</p>
      </div>

      {/* Contact Button and Chart Icon */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href={calurl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center"
        >
          <button className="bg-foreground text-background px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center gap-2 flex-1 ">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Get in touch
          </button>
        </Link>
        <Link href={`mailto:${email}`}>
          <div className="p-3 border border-border rounded-full hover:bg-accent transition-colors cursor-pointer">
            <MailIcon className="w-5 h-5 text-muted-foreground" />
          </div>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4">
        <StatsCard value={stats.earned} label="Earned" />
        <StatsCard value={stats.hired} label="Hired" />
        <StatsCard
          value={
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-foreground" />
              <span>{stats.rating.toFixed(2)}</span>
            </div>
          }
          label="Rating"
        />
        <StatsCard value={stats.followers.toString()} label="Followers" />
      </div>
    </div>
  );
};

interface StatsCardProps {
  value: React.ReactNode;
  label: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-xs text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
