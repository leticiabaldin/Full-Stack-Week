import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import BarberShopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

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
    include: {
      services: true,
    }
  });
  if (!barbershop) {
    return null;
  }
  return(
    <div>
    <BarberShopInfo barbershop={barbershop} />;

    <div className="px-5 flex flex-col gap-4 py-6">
    {barbershop.services.map((service) =>(
      <ServiceItem key={service.id} service={service}/>
    ))}
    </div>
  </div>
  )
};

export default BarberShopDetailsPage;
