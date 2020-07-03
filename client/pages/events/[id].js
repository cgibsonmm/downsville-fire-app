import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getEventById } from "../../helpers/apiHelpers/apiEvents";
import { useSelector } from "react-redux";

function FullDay() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState({});
  let currentMember = useSelector((state) => state.currentMember);

  useEffect(() => {
    if (id) {
      fetchEvent();
    }
  }, [id]);

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
