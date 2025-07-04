"use client";

import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import TextFields from "../components/formComponents/TextFields";
import Button from "../components/formComponents/Button";
import Checkbox from "../components/formComponents/CheckBox";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type FormData = {
  name: string;
  age: number;
  email: string;
  terms?: boolean;
};

export default function Home() {

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required"),
    age: yup
      .number()
      .typeError("Must be a number")
      .required("Number is required")
      .positive()
      .integer()
      .min(18, "You must be at least 18")
      .max(99, "You must be below 99"),
    email: yup
      .string()
      .email("Must be a proper email")
      .required("Email is required"),
    terms: yup
      .bool()
      .oneOf([true], 'Must accept terms and services to use our services')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <>
      <div className="w-full max-w-xs mx-auto my-10 ">
        <form onSubmit={handleSubmit(onSubmit)}>

          <TextFields
            label="Name"
            type="text"
            {...register("name")}
          />
          <span className="text-gray-400 text-sm">
            {errors.name?.message}
          </span>

          <TextFields
            label="Age"
            type="number"
            {...register("age")}
          />
          <span className="text-gray-400 text-s">
            {errors.age?.message}
          </span>

          <TextFields
            label="Email"
            type="email"
            {...register("email")}
          />
          <span className="text-gray-400 text-s">
            {errors.email?.message}
          </span>

          <Checkbox
            label="Accept terms and services"
            {...register("terms")}
          />
           <span className="text-gray-400 text-s">
            {errors.terms?.message}
          </span>

          <Button />
        </form>
      </div>
    </>
  )
}
