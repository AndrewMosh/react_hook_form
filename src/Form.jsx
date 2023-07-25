import React from "react";
import { useForm, Controller } from "react-hook-form";

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{ required: "Name is required" }}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} />}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <Controller
          name="message"
          control={control}
          defaultValue=""
          render={({ field }) => <textarea {...field} />}
          rules={{ required: "Message is required" }}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
