import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  /*
    Register tells react hook form what inputs should be part of validation, 
    handleSubmit handles submission, and we pass our own on submit function into it
    */
  const schema = yup.object().shape({
    fullName: yup.string().required("Your Full Name is Required"), // fullname must be string and required
    email: yup.string().email("Please format your email correctly").required(), // gives error if email not input
    age: yup
      .number("Your age must be a number")
      .positive("Your age must be a positive number")
      .integer("Your age must be a whole number")
      .min(18, "Minimum age is 18")
      .required("Age is required"), // age must be a positive integer 18+
    password: yup.string().min(4).max(20).required(),
    confirm_password: yup // same as password
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match")
      .required(),
  }); // shape how data look

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // specify how schema looks
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register determines key when data returned */}
      <input type="text" placeholder="Full Name..." {...register("fullName")} />
      <br />
      <input type="text" placeholder="Email..." {...register("email")} />
      <br />

      <input type="text" placeholder="Age..." {...register("age")} />
      <br />

      <input
        type="password"
        placeholder="Password..."
        {...register("password")}
      />
      <br />

      <input
        type="password"
        placeholder="Confirm Password..."
        {...register("confirm_password")}
      />
      <br />

      <p>{errors.fullName?.message}</p>
      <p>{errors.email?.message}</p>
      <p>{errors.age?.message}</p>
      <p>{errors.password?.message}</p>
      <p>{errors.confirm_password?.message}</p>

      <input type="submit" />
    </form>
  );
};
