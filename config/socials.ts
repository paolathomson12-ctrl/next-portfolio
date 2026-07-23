import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Paola Thomson",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/paolathomson",
  },
  {
    name: "Gmail",
    username: "paola.thomson12",
    icon: Icons.gmail,
    link: "mailto:paola.thomson12@gmail.com",
  },
];
