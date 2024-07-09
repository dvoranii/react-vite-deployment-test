const verifyRecaptcha = async (token) => {
  const secret = process.env.SECRET_KEY;
  console.log(secret);
  if (!secret) {
    throw new Error("SECRET_KEY environment variable is not defined");
  }
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secret}&response=${token}`,
    }
  );
  const data = await response.json();
  return data;
};

export default verifyRecaptcha;
