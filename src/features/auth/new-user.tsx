"use client";
import { Input } from "~/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { Button } from "~/components/ui/button";
import React from "react";
import { cn } from "~/lib/utils";
import { completeSignUpInput } from "~/validators/auth/complete-signup";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";

const formSchema = completeSignUpInput;

type FormValues = z.infer<typeof formSchema>;

export function NewUser() {
  const router = useRouter();

  const { mutate } = api.auth.completeSignUp.useMutation({
    async onSuccess() {
      router.push("/dashboard");
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      role: "athlete",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="biceps god" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <div>
              <FormLabel>Role</FormLabel>
              <div className="flex gap-4">
                <FormItem className="w-full">
                  <FormControl>
                    <RoleCard
                      onChange={() => field.onChange("athlete")}
                      active={field.value === "athlete"}
                    >
                      Athlete
                    </RoleCard>
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormItem className="w-full">
                  <FormControl>
                    <RoleCard
                      onChange={() => field.onChange("coach")}
                      active={field.value === "coach"}
                    >
                      Coach
                    </RoleCard>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            </div>
          )}
        />
        <Button type="submit" className="ml-auto">
          Finish setup
        </Button>
      </form>
    </Form>
  );
}

const RoleCard = (props: {
  onChange: VoidFunction;
  active?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button
      type="button"
      onClick={props.onChange}
      className={cn(
        "w-full rounded-lg border bg-card p-6 text-sm font-bold text-card-foreground shadow-sm",
        props.active
          ? "border-muted-foreground text-card-foreground"
          : "border-card text-card-foreground/80",
      )}
    >
      {props.children}
    </button>
  );
};
