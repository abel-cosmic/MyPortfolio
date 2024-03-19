/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZmcmgOTXiFW
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socials } from "../../utils/objects/socials";
import Image from "next/image";
import { Card } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useSendMessageMutation } from "@/hook/send/send";
import {Loader} from "lucide-react";
import {useEffect} from "react";
export function Contact() {
  const { mutate, isSuccess, isError,error } = useSendMessageMutation();
  const FormSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(4, { message: "Email must be at least 4 characters." }),
    message: z
      .string()
      .min(5, { message: "Message must be at least 5 characters." }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
   
    mutate({
      to: data["email"],
      subject: data["message"],
      text: data["name"],
    });
  };
  useEffect(()=>{
    if(isSuccess){
      toast("Your message has been successfully sent!", {
        action: {
          label: "close",
          onClick: () => console.log("close"),
        },
      });
      form.reset();
    }
    if(isError){
      toast("An error occurred while sending the message!", {
        action: {
          label: "close",
          onClick: () => console.log("close"),
        },
      });
      console.log(error)
    }
  
  }, [isSuccess]);
  return (
    <Form {...form}>
      <form
        id="contact"
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-transparent  h-fit  flex flex-col items-center justify-center "
      >
        <Card className="container pb-32 flex flex-col gap-4">
          <div className="w-fit mx-auto  rounded-3xl flex flex-col md:flex-row md:gap-0 gap-4 lg:gap-10 justify-center items-center ">
            <header className="text-center flex flex-col gap-4 items-center">
              <Image
                src="/logo-dark.ico"
                width={100}
                height={100}
                alt="iconI"
                className="w-20 h-20"
              />

              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below to get in touch with me.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                My Social links
              </p>
              <div className=" flex flex-row mx-auto gap-4 ">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50"
                    href={social.href}
                    target="_blank"
                  >
                    <social.icon className="h-6 w-6 lg:h-8 lg:w-8" />
                  </Link>
                ))}
              </div>
            </header>
            <div className="mx-auto md:w-1/2 w-full ">
              <div className="grid gap-6 items-center">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="grid gap-1.5 w-full">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="Elon Musk" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-1.5 w-full">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="example@example.com"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} placeholder="Your message..." />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {isSuccess ? (
                  <Button disabled className="animate-spin">
                    <Loader/>
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </form>
    </Form>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
