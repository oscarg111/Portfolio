export const Form = () => {
  onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Put in your name</h1>
        <input placeholder="John Doe" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};
