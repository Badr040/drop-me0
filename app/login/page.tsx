"use client";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomizeTextField from "@/components/shared/CustomizeTextField";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/components/layouts/authLayout";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/features/auth/authApi";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof LoginSchema>;

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const [loginUser] = useLoginMutation();

  const route = useRouter();

  const methods = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: FormData) => {
    try {
      loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();
      // route.push("/");
      toast.success("Logged in successfully!");
    } catch (e) {
      setIsLoading(true);
    }
  };

  return (
    <AuthLayout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-4">
            <CustomizeTextField
              name="email"
              as="input"
              disabled={isLoading}
              type="text"
              label="Email Address"
              placeholder="you@example.com"
            />
            <CustomizeTextField
              name="password"
              as="input"
              disabled={isLoading}
              type="password"
              label="Password"
              placeholder="••••••••"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 h-10 font-medium"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-primary hover:text-primary/90 font-semibold transition-colors"
              >
                Create one
              </Link>
            </p>
          </div>

          {/* <div className="mt-6">
            <Link
              href="/forgot-password"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Forgot your password?
            </Link>
          </div> */}
        </form>
      </FormProvider>
    </AuthLayout>
  );
}
export default LoginPage;
