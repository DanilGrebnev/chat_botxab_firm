'use client'
import dynamic from "next/dynamic";

export const DynamicUserCard = dynamic(() => import("./index"), { ssr: false })

