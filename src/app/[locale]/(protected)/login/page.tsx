import { LoginForm } from "@/src/components/login/LoginForm";

const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>Login Form</p>

      <LoginForm />
    </div>
  );
};

export default page;
