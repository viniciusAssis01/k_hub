import { z } from "zod";

export const schameFormCreateTech = z.object({
  title: z.string().min(1, "Nome é obrigatorio"),
  status: z.string().min(2, "Selecione um nivel"),
});
