import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface RegistrationData {
  fullName: string;
  enrollmentId: string;
  phone: string;
  email: string;
  school: string;
  programme: string;
  year: string;
}

interface RegistrationStore {
  registration: RegistrationData;

  setRegistration: (data: RegistrationData) => void;

  clearRegistration: () => void;
}

const emptyRegistration: RegistrationData = {
  fullName: "",
  enrollmentId: "",
  phone: "",
  email: "",
  school: "",
  programme: "",
  year: "",
};

export const useRegistrationStore =
  create<RegistrationStore>()(
    persist(
      (set) => ({
        registration: emptyRegistration,

        setRegistration: (data) =>
          set({
            registration: data,
          }),

        clearRegistration: () =>
          set({
            registration: emptyRegistration,
          }),
      }),
      {
        name: "euphoria-registration",
      }
    )
  );