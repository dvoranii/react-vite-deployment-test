const validateInput = {
  name: (input) => {
    if (!input.trim()) return "Name is required";
    return "";
  },

  email: (input) => {
    if (!input) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) return "Email is invalid (i.e abc@email.com)";
    return "";
  },
};

export default validateInput;
