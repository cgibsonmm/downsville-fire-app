import DatePicker from "react-datepicker";

export default function EventForm({ event, type, handleInput, handleSubmit }) {
  const handleDateInput = (date) => {
    let e = { target: { name: "date", value: date } };
    handleInput(e);
  };

  return (
    <form
      className="p-4 flex flex-col items-start w-full"
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">Event Title</label>
      <input
        placeholder="Title"
        className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="title"
        type="text"
        id="title"
        value={event && event.title}
        onChange={handleInput}
      />

      <label htmlFor="date">Date</label>
      <DatePicker
        autoComplete="off"
        className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="date"
        id="date"
        selected={event.date}
        minDate={new Date()}
        onChange={handleDateInput}
      />

      <label>Photo</label>

      <label>Description</label>
      <textarea
        placeholder="Enter event info here"
        className="my-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        name="description"
        onChange={handleInput}
      />

      <button className="text-gray-100 mt-1 py-1 px-4 border bg-red-500 rounded-full self-end mt-auto hover:bg-gray-100 hover:text-red-500 hover:border-2 hover:border-red-500 focus:outline-none font-bold">
        {type} Event
      </button>
    </form>
  );
}
