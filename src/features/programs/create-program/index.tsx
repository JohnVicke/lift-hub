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
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

const formSchema = z.object({
  name: z.string().email(),
  weeks: z.number().int().positive().or(z.literal("infinity")),
});

type FormValues = z.infer<typeof formSchema>;

export function CreateProgram() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="My program" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="weeks"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of weeks</FormLabel>
              <FormControl>
                <div className="flex gap-2">
                  <ToggleGroup type="single">
                    <ToggleGroupItem
                      className="h-14 w-20"
                      value="a"
                      variant="outline"
                    >
                      4
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      variant="outline"
                      className="h-14 w-20"
                      value="b"
                    >
                      8
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      variant="outline"
                      className="h-14 w-20"
                      value="c"
                    >
                      12
                    </ToggleGroupItem>
                    <ToggleGroupItem
                      variant="outline"
                      className="h-14 w-20"
                      value="c"
                    >
                      16
                    </ToggleGroupItem>
                  </ToggleGroup>
                  <Input
                    placeholder="custom"
                    className="h-14 w-20"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Continue</Button>
      </form>
    </Form>
  );
}
