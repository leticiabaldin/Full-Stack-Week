"use client"

import { Button } from "@/app/components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/router";

interface BarbershopInfoprops {
    barbershop: Barbershop
}


const BarberShopInfo = ({barbershop}: BarbershopInfoprops) => {
    const router = useRouter();
    
    const hancdleBckClick =() => {
        router.back();
    }
    return (  
        <div>
        <div className="h-[250px] w-full relative">
          <Button
            size="icon"
            variant="outline"
            className="z-50 absolute top-4 left-4"
          >
            <ChevronLeftIcon />
          </Button>
  
          <Button
            size="icon"
            variant="outline"
            className="z-50 absolute top-4 right-4"
          >
            <MenuIcon />
          </Button>
  
          <Image
            src={barbershop.imageUrl}
            fill
            alt={barbershop.name}
            style={{
              objectFit: "cover",
            }}
            className="opacity-85"
          />
        </div>
  
        <div className=" px-5 py-3">
          <h1 className="text-xl font-bold">{barbershop.name}</h1>
          <div className="flex items-center gap-1 mt-2">
              <MapPinIcon className="text-primary" size={18}/>
            <p className="text-sm">{barbershop.address}</p>
          </div>
  
          <div className="flex items-center gap-1 mt-2">
              <StarIcon className="text-primary" size={18}/>
            <p className="text-sm">5,0(43 avaliações)</p>
          </div>
  
        </div>
      </div>
    );
}
 
export default BarberShopInfo;