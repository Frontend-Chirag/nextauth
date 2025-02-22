"use server"

import * as z from 'zod';
import { LoginSchema, RegisterSchema} from '@/schemas';


export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedField = LoginSchema.safeParse(values);

    if (!validatedField.success) {
        return { error: "Invalid fields" }
    }

    return {success: "Email sent!"}
};


export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedField = RegisterSchema.safeParse(values);

    if (!validatedField.success) {
        return { error: "Invalid fields" }
    }

    return {success: "Email sent!"}
};

