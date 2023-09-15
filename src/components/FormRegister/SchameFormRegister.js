import { z } from "zod";

export const schameFormRegister = z
  .object({
    name: z.string().min(1, "O nome é obrigatorio"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatorio")
      .email("Forneça um e-mail valido"),
    password: z
      .string()
      .min(8, "A senha é obrigatoria e precisa de no minimo 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "é necessario ao menos uma letra maiuscula")
      .regex(/(?=.*?[a-z])/, "é necessario ao menos uma letra minuscula")
      .regex(/(?=.*?[0-9])/, "é necessario pelo menos um numero")
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        "é necessario pelo menos um caracter especial"
      ),
    confirmaSenha: z.string().min(1, "confirmar a senha é obrigatoria"),
    bio: z.string().min(1, "A bio é obrigatoria"),
    contact: z.string().min(1, "Uma forma de contato é obrigatoria"),
    course_module: z.string().min(2, "Selecione um modulo"),
  })
  .refine(({ password, confirmaSenha }) => confirmaSenha === password, {
    message: "A confirmação e a senha precisam ser iguais",
    path: ["confirmaSenha"],
  });
