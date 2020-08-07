import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function events() {
  const [admin, setAdmin] = useState(false);
  const currentMember = useSelector((state) => state.currentMember);

  useEffect(() => {
    if (currentMember.member && currentMember.member.admin) {
      setAdmin(true);
    }
  }, [currentMember]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-2 text-2xl">Calender of Events</h2>
      {admin && <h3>Create New Event</h3>}
    </div>
  );
}
