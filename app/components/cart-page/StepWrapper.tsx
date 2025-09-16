function StepWrapper({
  stepNumber,
  currentStep,
  title,
  subtitle,
  children,
}: {
  stepNumber: number;
  currentStep: number;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  const isActive = stepNumber === currentStep;
  const isCompleted = stepNumber < currentStep;
  const isUpcoming = stepNumber > currentStep;

  return (
    <div>
      <div className="border-black-lighter flex w-full justify-start gap-2 border-t-1 py-8">
        <span
          className={`me-2 mt-2.5 flex h-6 w-6 flex-shrink-0 items-start justify-center rounded-[50%] font-bold text-white ${isUpcoming ? "bg-black-disbaled" : "bg-black-darker"}`}
        >
          {stepNumber}
        </span>
        <div className="flex flex-col">
          <h3
            className={`mb-1 font-bold ${isUpcoming ? "text-black-disbaled text-2xl" : "text-[2rem]"}`}
          >
            {title}
          </h3>
          {subtitle && <p className="text-sm font-normal">{subtitle}</p>}
        </div>
      </div>
      <div className="pb-5">{isActive || isCompleted ? children : null}</div>
    </div>
  );
}

export default StepWrapper;
