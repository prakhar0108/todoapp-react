import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
type Inputs = {
  taskName: string;
  dueDate: string;
  category: string;
};

function FormComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Description..."
        {...register("taskName")}
        id="todo-input"
      />
      <div id="date-category">
        <input
          {...register("dueDate")}
          type="date"
          id="calendar-input"
          placeholder="Date..."
        />

        <select
          {...register("category")}
          id="select-dropdown"
          placeholder="Select..."
        >
          <option value="">Select</option>
          <option value="Work">Work</option>
          <option value="Office">Office</option>
          <option value="Personal">Personal</option>
          <option value="other">Other</option>
        </select>
      </div>
      {errors.dueDate && <span>This field is required</span>}

      <input type="submit" id="btn-submit" />
    </form>
  );
}
export default FormComponent;
