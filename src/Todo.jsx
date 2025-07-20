import { useState } from "react";

function Todo() {
  const [time, setTime] = useState("");
  const [work, setWork] = useState("");
  const [timeAndWork, setTimeAndWork] = useState([]);
  const [showTable, setShowTable] = useState(false); // ✅ Extra useState for toggling table

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const workChangeHandler = (event) => {
    setWork(event.target.value);
  };

  const saveWorkHandler = () => {
    if (time.trim() && work.trim()) {
      const newEntry = { time, work };
      setTimeAndWork([...timeAndWork, newEntry]);
      setTime("");
      setWork("");
      setShowTable(true); // Automatically show table when something is added
    }
  };

  const deleteHandler = (indexToDelete) => {
    const updatedList = timeAndWork.filter((_, index) => index !== indexToDelete);
    setTimeAndWork(updatedList);

    if (updatedList.length === 0) {
      setShowTable(false); // Hide table if list becomes empty
    }
  };

  const toggleTableHandler = () => {
    setShowTable((prevState) => !prevState);
  };

  return (
    <div>
      <h1>To Do App</h1>

      <div>
        <label htmlFor="time">Time:</label>
        <input
          type="text"
          id="time"
          value={time}
          onChange={timeChangeHandler}
        />
      </div>

      <div>
        <label htmlFor="work">Work:</label>
        <input
          type="text"
          id="work"
          value={work}
          onChange={workChangeHandler}
        />
      </div>

      <div>
        <button onClick={saveWorkHandler}>Save</button>
        <button onClick={toggleTableHandler} style={{ marginLeft: "10px" }}>
          {showTable ? "Hide Table" : "Show Table"}
        </button>
      </div>

      {showTable && (
        <div style={{ marginTop: "20px" }}>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Time</th>
                <th>Work</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {timeAndWork.map((each, index) => (
                <tr key={index}>
                  <td>{each.time}</td>
                  <td>{each.work}</td>
                  <td>
                    <button onClick={() => deleteHandler(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Todo;
