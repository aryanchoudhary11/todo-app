function TodoItem({ todoItems }) {
  return (
    <>
      <div className="items-container">
        {todoItems.map((item) => {
          return (
            <div className="row" key={item.name}>
              <div className="col-4">{item.name}</div>
              <div className="col-4">{item.date}</div>
              <div className="col-2">
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default TodoItem;
