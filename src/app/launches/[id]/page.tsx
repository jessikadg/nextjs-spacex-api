import { getLaunchDetails } from "@/api/getLaunchDetails";
import { DisplayFlattenedObject } from "@/components/DisplayComplexObjects";
import { Dictionary, Launch } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function LaunchDetails({
  params,
}: {
  params: { id: string };
}) {
  const launchDetails: Launch = await getLaunchDetails(params.id);

  return (
    <div className="bg-custom-gradient w-full min-h-screen flex flex-col text-white">
      <div className="w-full bg-slate-800/80 fixed z-2 h-10 p-2">
        <Link href={"/"} className="fixed">
          <span>{`<- Back to Home`}</span>
        </Link>
      </div>
      <div className="container p-20">
        <div className="flex mt-10">
          <div>
            <h1 className="text-4xl tracking-wide my-4 text-center">
              {launchDetails.name}
            </h1>
            <p className="text text-center">
              {new Date(launchDetails.date_utc).toUTCString()}
            </p>
            <p className="text-center">
              {launchDetails.details || "no details for this launch yet"}
            </p>

            <div>
              <DisplayFlattenedObject data={launchDetails} />
            </div>
          </div>

          <div className="fixed right-48 h-full">
            <div className="flex flex-col justify-center">
              <Image
                src={launchDetails.links.patch.large}
                alt="launch image"
                width={400}
                height={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
