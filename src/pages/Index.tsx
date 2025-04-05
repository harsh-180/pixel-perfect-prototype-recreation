
import React from "react";
import PageSelector from "../components/PageSelector";
import { toast } from "../components/ui/use-toast";

const Index = () => {
  const pages = [
    "All pages",
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4"
  ];

  const handleDone = (selectedPages: string[]) => {
    toast({
      title: "Selected Pages",
      description: (
        <div>
          {selectedPages.length > 0 
            ? selectedPages.join(", ") 
            : "No pages selected"}
        </div>
      )
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <PageSelector pages={pages} onDone={handleDone} />
      </div>
    </div>
  );
};

export default Index;
