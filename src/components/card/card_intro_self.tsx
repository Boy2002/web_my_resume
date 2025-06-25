import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  SideInRight1,
  SideInRight2,
  SideInRight3,
} from "../animation/side_in_right";

export function CardData() {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full flex justify-center py-30 space-x-16">
      <SideInRight1>
        <Card className="w-[350px] h-100 shadow-xl ">
          <CardHeader>
            <CardTitle className="text-3xl">{t("cardtitle1")}</CardTitle>
            <CardDescription>{t("subcard")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col">
            <Label className="text-xl">{t("carddetail1")}</Label>
          </CardContent>
          <CardFooter className="flex justify-end items-end">
            <Link href="/about-me">
              <Button>{t("more")}</Button>
            </Link>
          </CardFooter>
        </Card>
      </SideInRight1>
      <SideInRight2>
        <Card className="w-[350px] h-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl">{t("cardtitle2")}</CardTitle>
            <CardDescription>{t("subcard")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col space-y-2">
            <Label className="text-xl">{t("carddetail2-1")}</Label>
            <Label className="text-lg">{t("carddetail2_1")}</Label>
            <Label className="text-xl">{t("carddetail2-2")}</Label>
            <Label className="text-lg">{t("carddetail2_2")}</Label>
          </CardContent>
          <CardFooter className="flex justify-end items-end">
            <Link href="/skills">
              <Button>{t("more")}</Button>
            </Link>
          </CardFooter>
        </Card>
      </SideInRight2>
      <SideInRight3>
        <Card className="w-[350px] h-100 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl">{t("cardtitle3")}</CardTitle>
            <CardDescription>{t("subcard")}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col space-y-2">
            <Label className="text-xl">{t("carddetail3-1")}</Label>
            <Label className="text-xl">{t("carddetail3-2")}</Label>
            <Label className="text-xl">{t("carddetail3-3")}</Label>
          </CardContent>
          <CardFooter className="flex justify-end items-end">
            <Link href="/projects">
              <Button>{t("more")}</Button>
            </Link>
          </CardFooter>
        </Card>
      </SideInRight3>
    </div>
  );
}
