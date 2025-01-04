import { object, string, z } from "zod";

export const schema = object({
  blog_url: string().min(1),
});

export type FormValues = z.infer<typeof schema>;

export type ApiError = {
  message: string;
};
