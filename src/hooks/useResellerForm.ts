"use client";

import { type Dispatch, type FormEvent, type SetStateAction, useState } from "react";

import { useToast } from "@/components/Toast";

type FormStatus = "idle" | "submitting" | "success" | "error";
type FieldName = keyof ResellerFormValues;
type FieldErrors = Partial<Record<FieldName, string>>;

type ValidationMessages = {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
};

export type ResellerFormValues = {
  name: string;
  company: string;
  email: string;
  contact: string;
  message: string;
};

type UseResellerFormOptions = {
  language: string;
  values: ResellerFormValues;
  setValues: Dispatch<SetStateAction<ResellerFormValues>>;
  validationMessages: ValidationMessages;
  successMessage: string;
  errorMessage: string;
};

export const initialResellerFormValues: ResellerFormValues = {
  name: "",
  company: "",
  email: "",
  contact: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useResellerForm({
  language,
  values,
  setValues,
  validationMessages,
  successMessage,
  errorMessage: fallbackErrorMessage,
}: UseResellerFormOptions) {
  const { showToast } = useToast();
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const getFieldError = (field: FieldName, value: string) => {
    if (field === "name" && !value) {
      return validationMessages.nameRequired;
    }

    if (field === "email") {
      if (!value) {
        return validationMessages.emailRequired;
      }

      if (!emailPattern.test(value)) {
        return validationMessages.emailInvalid;
      }
    }

    if (field === "message" && !value) {
      return validationMessages.messageRequired;
    }

    return undefined;
  };

  const validateValues = (candidateValues: ResellerFormValues) => {
    const nextErrors: FieldErrors = {};

    (Object.keys(candidateValues) as FieldName[]).forEach((field) => {
      const error = getFieldError(field, candidateValues[field].trim());

      if (error) {
        nextErrors[field] = error;
      }
    });

    return nextErrors;
  };

  const handleFieldChange = (field: FieldName, value: string) => {
    setValues((currentValues) => ({
      ...currentValues,
      [field]: value,
    }));

    if (formStatus !== "idle") {
      setFormStatus("idle");
    }

    setFieldErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleFieldBlur = (field: FieldName) => {
    const error = getFieldError(field, values[field].trim());

    setFieldErrors((currentErrors) => {
      if (!error && !currentErrors[field]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };

      if (error) {
        nextErrors[field] = error;
      } else {
        delete nextErrors[field];
      }

      return nextErrors;
    });
  };

  const resetForm = () => {
    setValues(initialResellerFormValues);
    setFormStatus("idle");
    setFieldErrors({});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValues = {
      name: values.name.trim(),
      company: values.company.trim(),
      email: values.email.trim(),
      contact: values.contact.trim(),
      message: values.message.trim(),
    };

    const nextErrors = validateValues(trimmedValues);

    if (Object.keys(nextErrors).length > 0) {
      setFieldErrors(nextErrors);
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");

    try {
      const response = await fetch("/api/reseller", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trimmedValues, language }),
      });

      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || fallbackErrorMessage);
      }

      setFormStatus("success");
      showToast({ message: successMessage, tone: "success" });
      setValues(initialResellerFormValues);
      setFieldErrors({});
    } catch (error) {
      const message = error instanceof Error ? error.message : fallbackErrorMessage;

      setFormStatus("error");
      showToast({ message, tone: "error" });
    }
  };

  return {
    formStatus,
    fieldErrors,
    handleFieldChange,
    handleFieldBlur,
    handleSubmit,
    handleCancel: resetForm,
  };
}
