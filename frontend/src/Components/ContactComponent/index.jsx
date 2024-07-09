import "./styles.css";
// import CheckmarkSVG from "./CheckmarkSVG";
// import LoadingSpinnerSVG from "./LoadingSpinnerSVG";
import { useState } from "react";

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
              <div className="name-input__wrapper">
                <input
                  className={`name-input`}
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="email-input__wrapper">
                <input
                  className={`email-input`}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
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
