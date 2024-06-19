"use client";
import { Filters, SearchBarProps } from "@/types/types";
import React, { useEffect, useState } from "react";

export default function FiltersGroup({ onSearch }: SearchBarProps) {
  const [name, setName] = useState<string | undefined>(undefined);
  const [startDate, setStartDate] = useState<string | undefined>(undefined);
  const [endDate, setEndDate] = useState<string | undefined>(undefined);
  const [launchSuccess, setLaunchSuccess] = useState<boolean | undefined>(
    undefined
  );
  const [upcoming, setUpcoming] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    onSearch({
      name,
      startDate,
      endDate,
      launchSuccess,
      upcoming,
    });
  }, [name, startDate, endDate, launchSuccess, upcoming]);

  return (
    <div className="flex flex-col space-y-8 mt-8">
      <div className="flex flex-col ">
        <input
          type="text"
          value={name || ""}
          onChange={(e) => setName(e.target.value || undefined)}
          placeholder="Name"
          className="p-2 bg-transparent border-slate-50 border-2 rounded placeholder-slate-50"
        />
      </div>

      <div className="flex flex-col ">
        <select
          value={
            launchSuccess !== undefined
              ? launchSuccess
                ? "success"
                : "failure"
              : ""
          }
          onChange={(e) => {
            const value = e.target.value;
            setLaunchSuccess(
              value === "success"
                ? true
                : value === "failure"
                ? false
                : undefined
            );
          }}
          className="p-2 bg-transparent border-slate-50 border-2 rounded text-slate-50"
        >
          <option value="">Success/Failure</option>
          <option value="success">Success</option>
          <option value="failure">Failure</option>
        </select>
      </div>
      <div className="flex flex-col ">
        <select
          value={upcoming !== undefined ? (upcoming ? "upcoming" : "past") : ""}
          onChange={(e) => {
            const value = e.target.value;
            setUpcoming(
              value === "upcoming" ? true : value === "past" ? false : undefined
            );
          }}
          className="p-2 bg-transparent border-slate-50 border-2 rounded  text-slate-50"
        >
          <option value={undefined}>Upcoming/Past</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>

      <div className="flex flex-col">
        <span className="text-white"> Start Date</span>
        <input
          type="date"
          placeholder="Start Date"
          value={startDate || ""}
          onChange={(e) => setStartDate(e.target.value || undefined)}
          className="p-2 bg-transparent border-slate-50 border-2 rounded text-slate-50"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white">End Date</span>
        <input
          type="date"
          placeholder="End Date"
          value={endDate || ""}
          onChange={(e) => setEndDate(e.target.value || undefined)}
          className="p-2 bg-transparent border-slate-50 border-2 rounded text-slate-50"
        />
      </div>
    </div>
  );
}
