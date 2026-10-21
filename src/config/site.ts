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
  description: "A fan-made A Game About Needle In A Haystack wiki with gameplay guides, tool upgrades, hay-selling tips, and needle-finding strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://a-game-about-needle-in-a-haystack.wiki",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://a-game-about-needle-in-a-haystack.wiki").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/5321400/A_Game_About_Needle_In_A_Haystack/",
  heroVideoId: "szT7VS6cu08", // Full gameplay walkthrough
  social: {
    youtube: "https://www.youtube.com/watch?v=szT7VS6cu08",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
