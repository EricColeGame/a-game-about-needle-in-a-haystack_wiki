export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    steamCommunity?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "A Game About Needle In A Haystack Wiki",
  shortName: "Needle Wiki",
  logoText: "A",
  tagline: "Find the Needle. Master the Haystack.",
  description: "Find the needle faster with A Game About Needle In A Haystack guides, tool and upgrade tips, hay-selling strategies, gameplay help, and achievement advice.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://a-game-about-needle-in-a-haystack.wiki",
  supportEmail: "support@a-game-about-needle-in-a-haystack.wiki",
  gameUrl: "https://store.steampowered.com/app/5321400/A_Game_About_Needle_In_A_Haystack/",
  heroVideoId: "szT7VS6cu08", // Full gameplay walkthrough
  social: {
    steamCommunity: "https://steamcommunity.com/app/5321400/",
    youtube: "https://www.youtube.com/watch?v=szT7VS6cu08",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
