'use client'


import qs from "query-string";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDebounceCallback, useDebounceValue } from "usehooks-ts";

const SearchInput = () => {
  const router = useRouter();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounceCallback(setValue, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedValue(e.target.value);
  };

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          search: value,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, [value, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4 " />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
        onChange={handleChange}
        defaultValue={value}
      />
    </div>
  );
};

export default SearchInput;
