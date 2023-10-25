import { PhotoIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { IoLockClosed, IoMail, IoPersonOutline } from "react-icons/io5";
import Input from "./components/Inputs/Input";

function App() {
  const {
    register,
    handleSubmit,
    watch,
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
              errors
            />
            <Input
              icon={<IoPersonOutline />}
              errors
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Last name"
              label="Last name"
              register={register}
              required="Please enter your last name."
            />
            <Input
              icon={<IoMail />}
              errors
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              label="Email"
              register={register}
              required="Please enter your email."
            />
            <Input
              icon={<IoLockClosed />}
              errors
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              label="Password"
              register={register}
              required="Please enter your password."
            />
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </form>
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Cover photo
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      {...register("logo")}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
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
