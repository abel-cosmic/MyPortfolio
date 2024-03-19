import { sendMessage } from "@/api/send";
import { useMutation } from "@tanstack/react-query";

export const useSendMessageMutation = () => {
  return useMutation({
    mutationKey: ["Create Message"],
    mutationFn: sendMessage,
  });
};
