import "./styles.css";
// import CheckmarkSVG from "./CheckmarkSVG";
// import LoadingSpinnerSVG from "./LoadingSpinnerSVG";
import { useState } from "react";
import validateInput from "../../Utils/validateInput";
import sanitizeInput from "../../Utils/sanitizeInput";

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: validateInput.name(formData.name),
      email: validateInput.email(formData.email),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed", errors);
      return;
    }
    setIsLoading(true);

    const sanitizedData = {
      name: sanitizeInput.text(formData.name),
      email: sanitizeInput.email(formData.email),
      message: sanitizeInput.text(formData.message),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sanitizedData),
        credentials: "include",
        mode: "cors",
      });

      const result = await response.json();
      console.log("Response received:", result);

      if (result.status === "success") {
        setIsSuccess(true);
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className={`contact-section`}>
        <div className={`contact-section__inner container`}>
          <h1>Let&apos;s Connect!</h1>
          <p>
            Want to inquire about a project or employment opportunity?<br></br>
            Fill out the form below and I will return your message shortly.
          </p>

          <form className={`contact-form`} onSubmit={handleSubmit}>
            <div className="input-row">
              <div className={`name-input__wrapper input__wrapper`}>
                <input
                  className={`name-input`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </div>

              <div className={`email-input__wrapper input__wrapper`}>
                <input
                  className={`email-input`}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>
            </div>
            <textarea
              className={`message--textarea`}
              name="message"
              placeholder="Message (Optional)"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="button-row">
              {!isLoading && !isSuccess && (
                <button
                  className={`send--btn`}
                  type="submit"
                  disabled={isLoading || isSuccess}
                  style={{
                    visibility: isLoading || isSuccess ? "hidden" : "visible",
                  }}
                >
                  Send
                </button>
              )}
              {isLoading && <div>Loading...</div>}
              {!isLoading && isSuccess && <div>Message Sent!</div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactComponent;
