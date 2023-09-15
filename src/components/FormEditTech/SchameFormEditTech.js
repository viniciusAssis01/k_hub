import { z } from "zod";

export const schameFormEditTech = z.object({
  status: z.string().min(2, "Selecione um nivel"),
});
