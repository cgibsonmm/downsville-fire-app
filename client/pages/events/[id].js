import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getEventById } from "../../helpers/apiHelpers/apiEvents";
import { useSelector } from "react-redux";

function FullDay() {
  const router = useRouter();
  const [admin, setAdmin] = useState(false);
  const { id } = router.query;
  const [event, setEvent] = useState({});
  let currentMember = useSelector((state) => state.currentMember);

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

  useEffect(() => {
    if (currentMember.member) {
      setAdmin(currentMember.member.admin);
    }
  }, [currentMember]);

  const fetchEvent = async () => {
    let e = await getEventById(id);
    setEvent(e);
  };

  let { title, description } = event;

  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      {admin && <button>Edit Event</button>}
    </div>
  );
}

export default FullDay;
