import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";

 export const Header = () => {
    return (
        <Card>
            <CardContent>
                <Image src={"/logo.png"} height={22} width={120} alt="Logo"/>
                <Button variant="outline" size="icon">
                    <MenuIcon/>
                </Button>
            </CardContent>
        </Card>
    );
}

