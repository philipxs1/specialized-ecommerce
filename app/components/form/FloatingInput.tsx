import React from "react";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";
interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  value?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
  register,
  value,
  error,
}: FloatingInputProps) {
  return (
    <div className="w-full">
      <div className="floating-form">
        <input
          id={id}
          type={type}
          aria-invalid={error ? "true" : "false"}
          {...register}
          className="floating-input"
          placeholder=" "
        />

        <label htmlFor={id}>{label}</label>
      </div>
      {error && (
        <span className="text-form-error mt-1 block p-1 text-sm">
          {error.message}
        </span>
      )}
    </div>
  );
}
