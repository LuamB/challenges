import Link from "next/link";
import { useRouter } from "next/router";
import { volumes, introduction } from "@/resources/lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  console.log("slug ", router.query);

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  return <></>;
}
