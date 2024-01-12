"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import { BeatLoader } from "react-spinners";

const NewVerificationForm = () => {
  return (
    <CardWrapper
      headerLabel="Verify your email address"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <BeatLoader />
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
