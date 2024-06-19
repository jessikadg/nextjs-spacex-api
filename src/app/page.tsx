import { getLaunchList } from "@/api/getLaunchList";
import { Launch } from "@/types/types";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const launchList: Launch[] = await getLaunchList();

  return <HomeClient initialLaunches={launchList} />;
}
