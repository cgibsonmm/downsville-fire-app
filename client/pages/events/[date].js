import { useRouter } from "next/router";

export default function FullDay(props) {
  const router = useRouter();
  const { date } = router.query;
  return <div>hello{date}</div>;
}
