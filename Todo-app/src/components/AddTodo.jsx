function AddTodo() {
  return (
    <div className="container">
        <div class="row">
            <div class="col-4"><input type="text" placeholder="Enter todo here"/></div>
            <div class="col-4"><input type="date" /></div>
            <div class="col-2"><button type="button" class="btn btn-success">Success</button></div>
        </div>
    </div>
  );
}
export default AddTodo;