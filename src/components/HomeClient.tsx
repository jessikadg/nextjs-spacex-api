"use client";
import React, { useState, useEffect } from "react";
import { Filters, Launch } from "@/types/types";
import FiltersGroup from "./FiltersGroup";
import Link from "next/link";
import Card from "./Card";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const HomeClient: React.FC<{ initialLaunches: Launch[] }> = ({
  initialLaunches,
}) => {
  const [filters, setFilters] = useState<Filters>({
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    launchSuccess: undefined,
    upcoming: undefined,
  });

  const [filteredLaunches, setFilteredLaunches] =
    useState<Launch[]>(initialLaunches);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const handleSearch = (filters: Filters, launches: Launch[]) => {
    const { name, startDate, endDate, launchSuccess, upcoming } = filters;

    // Parse dates once for efficiency
    const parsedStartDate =
      startDate && !isNaN(Date.parse(startDate)) ? new Date(startDate) : null;
    const parsedEndDate =
      endDate && !isNaN(Date.parse(endDate)) ? new Date(endDate) : null;

    return launches.filter((launch) => {
      // return true if a confition is matched, the rest is false
      if (name && !launch.name.toLowerCase().includes(name.toLowerCase())) {
        return false;
      }
      if (parsedStartDate && new Date(launch.date_utc) < parsedStartDate) {
        return false;
      }
      if (parsedEndDate && new Date(launch.date_utc) > parsedEndDate) {
        return false;
      }
      if (launchSuccess !== undefined && launch.success !== launchSuccess) {
        return false;
      }
      if (upcoming !== undefined && launch.upcoming !== upcoming) {
        return false;
      }
      return true;
    });
  };

  // Trigger filtering whenever filters change
  useEffect(() => {
    setFilteredLaunches(handleSearch(filters, initialLaunches));
  }, [filters, initialLaunches]);

  return (
    <main className="flex min-h-screen">
      <div className="fixed bg-custom-gradient w-full h-full" />

      <div className="fixed top-4 right-4 z-20 md:hidden">
        {isMobileMenuOpen ? (
          <IoMdClose
            className="text-white justify-end"
            size={30}
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <CiMenuBurger
            className="text-white justify-end"
            size={30}
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`relative md:w-72 w-full z-10 md:block ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="fixed md:w-auto md:bg-blue-800/30 p-8 w-full h-full bg-blue-800/80">
          <div className="mt-8">
            <p className="text-center text-slate-50">Filters</p>
            <FiltersGroup onSearch={setFilters} />
          </div>
        </div>
      </div>

      <div className="mt-16 px-8 md:p-20 relative">
        <div className="flex justify-center mb-10">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/SpaceX_logo_black.svg"
            width={400}
            height={100}
            alt="Space X logo"
            className="invert"
          />
        </div>

        {filteredLaunches?.length > 0 ? (
          <div className="flex flex-wrap container gap-8 w-full justify-center">
            {filteredLaunches.map((launch) => (
              <Link href={`/launches/${launch.id}`} key={launch.id}>
                <Card
                  key={launch.id}
                  imageUrl={launch.links.patch.small}
                  name={launch.name}
                  date={launch.date_utc}
                  details={launch.details}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div>
            <p className="text-white">No data found</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default HomeClient;
