import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import BarberShopInfo from "./_components/barbershop-info";

interface BarberShopDetailsPageProps {
  params: {
    id?: string;
  };
}

const BarberShopDetailsPage = async ({
  params,
}: BarberShopDetailsPageProps) => {
  if (!params.id) {
    return null;
  }
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!barbershop) {
    return null;
  }
  return <BarberShopInfo barbershop={barbershop} />;
};

export default BarberShopDetailsPage;
