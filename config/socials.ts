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
  }
];
