import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getEventById } from "../../helpers/apiHelpers/apiEvents";
import { useSelector } from "react-redux";
import EventForm from "./EventForm";

function FullDay() {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
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
    e.date = new Date(e.date);
    setEvent(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInput = (e) => {
    let { name, value } = e.target;
    setEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let { title, description } = event;
  if (edit) {
    return (
      <div>
        <EventForm
          type={"Edit"}
          event={event}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    );
  }
  return (
    <div>
      <h4>{title}</h4>
      <p>{description}</p>
      {admin && <button onClick={() => setEdit(true)}>Edit Event</button>}
    </div>
  );
}

export default FullDay;
