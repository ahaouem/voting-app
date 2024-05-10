import { z } from "zod";

export const FormSchema = z.object({
    // todo: change for production
    v_title: z.string().min(2, {
        message: "Voting title must be at least 10 characters.",
    }),
    v_desc: z.string().min(2, {
        message: "Voting description must be at least 20 characters.",
    }),
    v_endtime: z.string().date(),
    v_option1: z.string().min(2, {
        message: "Option must be at least 2 characters.",
    }),
    v_option2: z.string().min(2, {
        message: "Option must be at least 2 characters.",
    }),
    allowed_users: z
        .array(
            z.object({
                id: z.number(),
                name: z.string().min(2, {
                    message: "Username must be at least 2 characters.",
                }),
                image: z.string().url().min(2, {
                    message: "Image url must be at least 2 characters.",
                }),
            }),
        )
        .optional(),
    category: z.string().min(2, {
        message: "Category must be chosen.",
    }),
    is_private: z.boolean(),
    v_img: z.string().optional(),
});
