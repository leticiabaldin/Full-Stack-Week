"use client"

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Barbershop } from "@prisma/client";
import Image from "next/image";
import { Badge } from "@/app/components/ui/badge";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface BarbershopItemprops {
  barbershop: Barbershop;
}

const BarberShopItem = ({ barbershop }: BarbershopItemprops) => {
const router = useRouter();
const handleBookingClick = () => {
  router.push(`/barbershops/${barbershop.id}`);
}

  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2x1">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-3 left-3 z-50">
          <Badge variant="secondary" className=" flex items-center top-3 left-3 gap-1" >
            <StarIcon size={12} className="fill-primary text-primary" />
            <span className="text-xs">5,0</span>
          </Badge>

          </div>
          <Image
            className="rounded-2x1"
            src={barbershop.imageUrl}
            alt="barberShop"
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>

        <h2 className="font-bold">{barbershop.name}</h2>
        <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
          {barbershop.address}
        </p>

        <Button className="w-full mt-3" variant="secondary" onClick={handleBookingClick}>
          Reservar
        </Button>
      </CardContent>
    </Card>
  );
};

export default BarberShopItem;
