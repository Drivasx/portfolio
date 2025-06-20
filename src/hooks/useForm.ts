import { useState } from "react";

export const useForm = (initialForm: any) => {
  const [form, setForm] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    onInputChange,
    setForm,
  };
};
