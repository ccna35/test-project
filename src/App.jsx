import { PhotoIcon } from "@heroicons/react/24/solid";
import { useForm, useWatch } from "react-hook-form";
import { IoLockClosed, IoMail, IoPersonOutline } from "react-icons/io5";
import Input from "./components/Inputs/Input";
import ImageInput from "./components/inputs/ImageInput";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <nav className="h-16 bg-gray-900"></nav>
      <section className="py-16">
        <div className="container mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col gap-4"
          >
            <Input
              icon={<IoPersonOutline />}
              name="firstName"
              id="firstName"
              type="text"
              placeholder="First name"
              label="First name"
              register={register}
              required="Please enter your first name."
              errors={errors}
              control={control}
            />
            <Input
              icon={<IoPersonOutline />}
              errors={errors}
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last name"
              label="Last name"
              register={register}
              control={control}
              required="Please enter your last name."
            />
            <Input
              icon={<IoMail />}
              errors={errors}
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              label="Email"
              register={register}
              control={control}
              required="Please enter your email."
            />
            <Input
              icon={<IoLockClosed />}
              errors={errors}
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              label="Password"
              register={register}
              control={control}
              required="Please enter your password."
            />
            <ImageInput
              errors={errors}
              name="logo"
              id="logo"
              register={register}
              label="Logo"
              control={control}
              required="Please upload the logo."
            />
            <ImageInput
              errors={errors}
              name="docs"
              id="docs"
              multiple
              register={register}
              label="Documents"
              control={control}
              required="Please upload all documents."
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </form>
        </div>
      </section>
      <section className="bg-yellow-400">
        <div className="container mx-auto min-h-screen">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
          unde quas iure quidem sequi qui molestias veniam exercitationem!
          Possimus, enim! Laboriosam sed consequuntur maxime culpa ad iure, enim
          est illum!
        </div>
      </section>
    </>
  );
}

export default App;
