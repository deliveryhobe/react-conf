"use client";
import { cn } from "@/libs/utils";
import Spinner from "@/presentation/components/Spinner";
import Image, { ImageLoaderProps } from "next/image";
import React, { FC, useState } from "react";

interface CustomImageProps extends ImageLoaderProps {
  alt: string;
  width: number;
  height: number;
  src: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  fill?: boolean;
  loading?: "eager" | "lazy" | undefined;
  quality?: number;
  sizes?: string;
  className?: string;
  variant?: "DEFAULT" | "FILL";
}

const ExtendedImage: FC<CustomImageProps> = ({
  src,
  width,
  height,
  alt,
  className,
  ...props
}) => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative flex justify-center w-[88px] sm:w-[140px]">
      {loading && (
        <div className="absolute top-0 h-full w-full flex justify-center items-center">
          <Spinner size={50} />
        </div>
      )}
      <Image
        className={cn(" w-full", className)}
        src={src}
        alt="Random image"
        width={width}
        height={height}
        onLoadingComplete={() => setLoading(false)}
        style={{ objectFit: props.objectFit }}
      />
    </div>
  );
};

export default ExtendedImage;
