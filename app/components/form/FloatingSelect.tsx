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

const AU_STATES = [
  { value: "New South Wales" },
  { value: "Victoria" },
  { value: "Queensland" },
  { value: "Western Australia" },
  { value: "South Australia" },
  { value: "Tasmania" },
  { value: "Australian Capital Territory" },
  { value: "Northern Territory" },
];

export default function FloatingSelect({
  id,
  label,
  type = "text",
  register,

  error,
}: FloatingInputProps) {
  return (
    <div className="w-full">
      <div className="floating-form">
        <select
          id={id}
          className="floating-select"
          aria-invalid={error ? "true" : "false"}
          {...register}
        >
          <option value="" />
          {AU_STATES?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </select>

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
