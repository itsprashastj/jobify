"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  jobTitle: z.string().min(1, { message: "Job title is required." }),
  contractType: z.string().min(1, { message: "Contract type is required." }),
  duration: z.string().min(1, { message: "Duration is required." }),
  company: z.string().min(1, { message: "Company name is required." }),
  location: z.string().min(1, { message: "Location is required." }),
  salary: z.string().min(1, { message: "Salary is required." }),
  jobDescription: z
    .string()
    .min(1, { message: "Job description is required." }),
  responsibilities: z
    .string()
    .min(1, { message: "Responsibilities are required." }),
  requiredSkills: z
    .string()
    .min(1, { message: "Required skills are required." }),
  benefits: z.string().min(1, { message: "Benefits are required." }),
  aboutCompany: z
    .string()
    .min(1, { message: "About the company is required." }),
});

export default function PostJobComponent({ user }) {
  const userID = user?.id;

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      jobTitle: "",
      contractType: "",
      duration: "",
      company: "",
      location: "",
      salary: "",
      jobDescription: "",
      responsibilities: "",
      requiredSkills: "",
      benefits: "",
      aboutCompany: "",
    },
  });

  const handleSubmit = async (data) => {
    const uuid = uuidv4();
    const postID = `${uuid}-${form.jobTitle}-${form.company}`;
    try {
      const { data: supabaseData, error } = await supabase
        .from("jobPosts")
        .insert([{ ...data, id: postID, userid: userID }]);

      if (error)
        throw toast({
          title: "An error occurred while posting the job",
          description: error.message,
        });
      toast({
        title: "Job posted successfully",
        description: "URL: /jobs/" + postID,
      });
    } catch (error) {
      toast({
        title: "An error occurred while posting the job",
        description: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Post a New Job</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              {Object.keys(form.getValues()).map((key) => (
                <FormField
                  key={key}
                  control={form.control}
                  name={key}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{key.replace(/([A-Z])/g, " $1")}</FormLabel>
                      <FormControl>
                        {key === "jobDescription" ||
                        key === "responsibilities" ||
                        key === "requiredSkills" ||
                        key === "benefits" ||
                        key === "aboutCompany" ? (
                          <Textarea
                            {...field}
                            placeholder={`Enter ${key
                              .replace(/([A-Z])/g, " $1")
                              .toLowerCase()}`}
                            rows={4}
                          />
                        ) : key === "contractType" ? (
                          <>
                            <Input
                              {...field}
                              placeholder="Enter contract type"
                              list="contractTypeOptions"
                            />
                            <datalist id="contractTypeOptions">
                              <option value="Full-time" />
                              <option value="Part-time" />
                              <option value="Contract" />
                              <option value="Internship" />
                            </datalist>
                          </>
                        ) : (
                          <Input
                            {...field}
                            placeholder={`Enter ${key
                              .replace(/([A-Z])/g, " $1")
                              .toLowerCase()}`}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex justify-end mt-6">
                <Button type="submit">Post Job</Button>
              </div>
            </form>
          </Form>
        </div>
        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Job Posting Preview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">{form.watch("jobTitle")}</h3>
              <p className="text-muted-foreground">
                {form.watch("contractType")} | {form.watch("duration")}
              </p>
            </div>
            <div>
              <h4 className="font-bold">Company</h4>
              <p>{form.watch("company")}</p>
            </div>
            <div>
              <h4 className="font-bold">Location</h4>
              <p>{form.watch("location")}</p>
            </div>
            <div>
              <h4 className="font-bold">Salary</h4>
              <p>{form.watch("salary")}</p>
            </div>
            <div>
              <h4 className="font-bold">Job Description</h4>
              <p>{form.watch("jobDescription")}</p>
            </div>
            <div>
              <h4 className="font-bold">Responsibilities</h4>
              <ul className="list-disc pl-6">
                {form
                  .watch("responsibilities")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Required Skills</h4>
              <ul className="list-disc pl-6">
                {form
                  .watch("requiredSkills")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Benefits</h4>
              <ul className="list-disc pl-6">
                {form
                  .watch("benefits")
                  .split("\n")
                  .map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold">About the Company</h4>
              <p>{form.watch("aboutCompany")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
