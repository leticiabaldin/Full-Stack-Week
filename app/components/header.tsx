import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

 export const Header = () => {
    return (
        <Card>
            <CardContent className="p-5 justify-between flex items-center flex-row">
                <Image src={"/logo.png"} height={22} width={120} alt="Logo"/>
                <Button variant="outline" size="icon" className="h-6 w-6">
                    <MenuIcon size={16}/>
                </Button>
            </CardContent>
        </Card>
    );
}

