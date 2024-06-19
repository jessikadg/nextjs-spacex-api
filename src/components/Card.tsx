import { CardProps } from "@/types/types";
import Image from "next/image";

export default function Card({ name, date, details, imageUrl }: CardProps) {
  return (
    <div className="bg-indigo-100/50 w-64 h-96 p-4 border-round-xl rounded-lg">
      {imageUrl ? (
        <div className="p-2 w-full relative h-48">
          <Image
            src={imageUrl}
            alt="launch image"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ) : (
        <div className="w-full h-48 mb-4 bg-slate-300" />
      )}

      <h2 className="text-xl my-3 text-center">{name}</h2>
      <p className="text-sm mb-2">{new Date(date).toUTCString()}</p>
      {details ? (
        <p className="text-sm overflow-hidden text-ellipsis line-clamp-3">
          {details}
        </p>
      ) : (
        <p className="text-sm text-gray-500 text-center">
          No details for this launch yet
        </p>
      )}
    </div>
  );
}
