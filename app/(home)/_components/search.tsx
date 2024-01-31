"use client";

import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma barbearia..." />
      <Button variant="default" size="icon">
        <SearchIcon size={18}></SearchIcon>
      </Button>
    </div>
  );
};

export default Search;
