import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Send, CheckCircle, AlertCircle } from "lucide-react";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    Email: "",
    familiarity: "",
    rating: 0,
    trueSoulslike: "",
    artStyle: "",
    keepPlaying: "",
    uniqueness: "",
    recommend: "",
    purchase: "",
    feedback: "",
  });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [status, setStatus] = useState(""); // 'loading', 'success', 'error'
  const [message, setMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);


  // Replace with your Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "e651f240-63fc-46b6-a763-a26db1166080";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.name.trim()) {
      setStatus("error");
      setMessage("Please enter your name.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.familiarity) {
      setStatus("error");
      setMessage("Please select Answer in the First Question.");
      //   Please select your familiarity with Soulslike games.
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (formData.rating === 0) {
      setStatus("error");
      setMessage("Please select Answer in the Second Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.trueSoulslike) {
      setStatus("error");
      setMessage("Please select Answer in the Third Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.artStyle) {
      setStatus("error");
      setMessage("Please select Answer in the Fourth Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.keepPlaying) {
      setStatus("error");
      setMessage("Please select Answer in the Fifth Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.uniqueness) {
      setStatus("error");
      setMessage("Please select Answer in the sixth Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.recommend) {
      setStatus("error");
      setMessage("Please select Answer in the seventh Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.purchase) {
      setStatus("error");
      setMessage("Please select Answer in the eighth Question.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    if (!formData.feedback.trim()) {
      setStatus("error");
      setMessage("Please provide your Last feedback.");
      setTimeout(() => setStatus(""), 4000);
      return;
    }

    setStatus("loading");

    const formPayload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.Email || "Not provided", // Include email or default text
      familiarity: formData.familiarity,
      rating: `${formData.rating} stars`,
      trueSoulslike: formData.trueSoulslike,
      artStyle: formData.artStyle,
      keepPlaying: formData.keepPlaying,
      uniqueness: formData.uniqueness,
      recommend: formData.recommend,
      purchase: formData.purchase,
      message: formData.feedback,
      subject: `New Feedback from ${formData.name} - ${formData.rating} stars`,
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you for your feedback! We appreciate it.");


        // Reset form
        setFormData({
          name: "",
          familiarity: "",
          rating: 0,
          trueSoulslike: "",
          artStyle: "",
          keepPlaying: "",
          uniqueness: "",
          recommend: "",
          purchase: "",
          feedback: "",
        });

        // Show success modal
        setShowSuccessModal(true);

        // Redirect to home page after 3 seconds
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);

      } else {
        setStatus("error");
        setMessage("Oops! Something went wrong. Please try again.");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setMessage("Failed to send feedback. Please check your connection.");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const handleRating = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleOptionChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Custom Radio Button Component
  const RadioOption = ({ name, value, checked, onChange, label }) => (
    <label className="flex items-center gap-2 cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${checked
          ? "border-primary bg-primary"
          : "border-muted-foreground/30 group-hover:border-primary/50"
          }`}
      >
        {checked && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-2 h-2 rounded-full bg-background"
          />
        )}
      </div>
      <span
        className={`text-sm transition-colors ${checked ? "text-foreground font-medium" : "text-muted-foreground"
          }`}
      >
        {label}
      </span>
    </label>
  );

  return (
    <section className="relative min-h-screen md:py-32 flex items-center overflow-hidden py-20">
      {/* Animated Gradient Orbs - Same as Hero */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-2/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 text-primary border-primary/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium">Tell Us About Your Opinion</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4"
            >
              <span className="block">SHARE YOUR</span>
              <span className="block gradient-text">FEEDBACK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Help us improve by sharing your thoughts and experience
            </motion.p>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            {/* Card with gradient border effect */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50 animate-pulse-slow">
              <div className="bg-background rounded-2xl p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"

                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  {/* Email Field - NEW */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.625 }}
                  >
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      Your Email <span className="text-muted-foreground text-xs">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      value={formData.Email}
                      onChange={(e) =>
                        setFormData({ ...formData, Email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  {/* Familiarity with Soulslike games */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.65 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      1. How familiar are you with Soulslike games? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="familiarity"
                        value="Never played"
                        checked={formData.familiarity === "Never played"}
                        onChange={(e) =>
                          handleOptionChange("familiarity", e.target.value)
                        }
                        label="Never played"
                      />
                      <RadioOption
                        name="familiarity"
                        value="Played a few"
                        checked={formData.familiarity === "Played a few"}
                        onChange={(e) =>
                          handleOptionChange("familiarity", e.target.value)
                        }
                        label="Played a few"
                      />
                      <RadioOption
                        name="familiarity"
                        value="Big fan"
                        checked={formData.familiarity === "Big fan"}
                        onChange={(e) =>
                          handleOptionChange("familiarity", e.target.value)
                        }
                        label="Big fan"
                      />
                    </div>
                  </motion.div>

                  {/* Rating Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      2. Overall, how would you rate your demo experience? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          onClick={() => handleRating(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          className="focus:outline-none"
                        >
                          <Star
                            size={40}
                            className={`transition-all duration-200 ${star <= (hoveredStar || formData.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                              }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                    {formData.rating > 0 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm text-muted-foreground mt-2"
                      >
                        {formData.rating === 5 && "⭐ Excellent!"}
                        {formData.rating === 4 && "😊 Great!"}
                        {formData.rating === 3 && "👍 Good"}
                        {formData.rating === 2 && "😐 Could be better"}
                        {formData.rating === 1 && "😞 Needs improvement"}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* True Soulslike Challenge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.75 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      3. Did the game feel like a true Soulslike in terms of challenge? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="trueSoulslike"
                        value="Yes"
                        checked={formData.trueSoulslike === "Yes"}
                        onChange={(e) =>
                          handleOptionChange("trueSoulslike", e.target.value)
                        }
                        label="Yes"
                      />
                      <RadioOption
                        name="trueSoulslike"
                        value="Somewhat"
                        checked={formData.trueSoulslike === "Somewhat"}
                        onChange={(e) =>
                          handleOptionChange("trueSoulslike", e.target.value)
                        }
                        label="Somewhat"
                      />
                      <RadioOption
                        name="trueSoulslike"
                        value="No"
                        checked={formData.trueSoulslike === "No"}
                        onChange={(e) =>
                          handleOptionChange("trueSoulslike", e.target.value)
                        }
                        label="No"
                      />
                    </div>
                  </motion.div>

                  {/* Art Style */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      4. Did the art style match the gameplay difficulty? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="artStyle"
                        value="Yes, very well"
                        checked={formData.artStyle === "Yes, very well"}
                        onChange={(e) =>
                          handleOptionChange("artStyle", e.target.value)
                        }
                        label="Yes, very well"
                      />
                      <RadioOption
                        name="artStyle"
                        value="Mostly"
                        checked={formData.artStyle === "Mostly"}
                        onChange={(e) =>
                          handleOptionChange("artStyle", e.target.value)
                        }
                        label="Mostly"
                      />
                      <RadioOption
                        name="artStyle"
                        value="No"
                        checked={formData.artStyle === "No"}
                        onChange={(e) =>
                          handleOptionChange("artStyle", e.target.value)
                        }
                        label="No"
                      />
                    </div>
                  </motion.div>

                  {/* Keep Playing */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.85 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      5. Did the demo make you want to keep playing the full game? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="keepPlaying"
                        value="Yes, definitely"
                        checked={formData.keepPlaying === "Yes, definitely"}
                        onChange={(e) =>
                          handleOptionChange("keepPlaying", e.target.value)
                        }
                        label="Yes, definitely"
                      />
                      <RadioOption
                        name="keepPlaying"
                        value="Maybe"
                        checked={formData.keepPlaying === "Maybe"}
                        onChange={(e) =>
                          handleOptionChange("keepPlaying", e.target.value)
                        }
                        label="Maybe"
                      />
                      <RadioOption
                        name="keepPlaying"
                        value="No"
                        checked={formData.keepPlaying === "No"}
                        onChange={(e) =>
                          handleOptionChange("keepPlaying", e.target.value)
                        }
                        label="No"
                      />
                    </div>
                  </motion.div>

                  {/* Uniqueness */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      6.  Compared to other Soulslike games, this experience felt: <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="uniqueness"
                        value="Fresh and unique"
                        checked={formData.uniqueness === "Fresh and unique"}
                        onChange={(e) =>
                          handleOptionChange("uniqueness", e.target.value)
                        }
                        label="Fresh and unique"
                      />
                      <RadioOption
                        name="uniqueness"
                        value="Familiar but well executed"
                        checked={formData.uniqueness === "Familiar but well executed"}
                        onChange={(e) =>
                          handleOptionChange("uniqueness", e.target.value)
                        }
                        label="Familiar but well executed"
                      />
                      <RadioOption
                        name="uniqueness"
                        value="Confusing or unclear"
                        checked={formData.uniqueness === "Confusing or unclear"}
                        onChange={(e) =>
                          handleOptionChange("uniqueness", e.target.value)
                        }
                        label="Confusing or unclear"
                      />
                    </div>
                  </motion.div>

                  {/* Recommend */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.95 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      7. Would you recommend this game to a friend who likes Soulslike games? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="recommend"
                        value="Yes"
                        checked={formData.recommend === "Yes"}
                        onChange={(e) =>
                          handleOptionChange("recommend", e.target.value)
                        }
                        label="Yes"
                      />
                      <RadioOption
                        name="recommend"
                        value="Maybe"
                        checked={formData.recommend === "Maybe"}
                        onChange={(e) =>
                          handleOptionChange("recommend", e.target.value)
                        }
                        label="Maybe"
                      />
                      <RadioOption
                        name="recommend"
                        value="No"
                        checked={formData.recommend === "No"}
                        onChange={(e) =>
                          handleOptionChange("recommend", e.target.value)
                        }
                        label="No"
                      />
                    </div>
                  </motion.div>

                  {/* Purchase Intent */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label className="block text-sm font-medium mb-4 text-foreground">
                      8. Would you buy this game if released in a polished state? <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                      <RadioOption
                        name="purchase"
                        value="Yes, day one"
                        checked={formData.purchase === "Yes, day one"}
                        onChange={(e) =>
                          handleOptionChange("purchase", e.target.value)
                        }
                        label="Yes, day one"
                      />
                      <RadioOption
                        name="purchase"
                        value="Yes, on sale"
                        checked={formData.purchase === "Yes, on sale"}
                        onChange={(e) =>
                          handleOptionChange("purchase", e.target.value)
                        }
                        label="Yes, on sale"
                      />
                      <RadioOption
                        name="purchase"
                        value="Maybe"
                        checked={formData.purchase === "Maybe"}
                        onChange={(e) =>
                          handleOptionChange("purchase", e.target.value)
                        }
                        label="Maybe"
                      />
                      <RadioOption
                        name="purchase"
                        value="No"
                        checked={formData.purchase === "No"}
                        onChange={(e) =>
                          handleOptionChange("purchase", e.target.value)
                        }
                        label="No"
                      />
                    </div>
                  </motion.div>

                  {/* Feedback Field */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.05 }}
                  >
                    <label className="block text-sm font-medium mb-3 text-foreground">
                      9. Your Feedback
                    </label>
                    <textarea

                      rows={6}
                      value={formData.feedback}
                      onChange={(e) =>
                        setFormData({ ...formData, feedback: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      placeholder="Tell us your opinion, thoughts, suggestions/ideas, advantages, and disadvantages of the game"
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full btn btn-lg gradient-bg group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {status === "loading" ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                            >
                              <Send size={20} />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Feedback
                            <Send
                              className="transition-transform group-hover:translate-x-1"
                              size={20}
                            />
                          </>
                        )}
                      </span>

                    </button>
                  </motion.div>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600"
                    >
                      <CheckCircle size={20} />
                      <span>{message}</span>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600"
                    >
                      <AlertCircle size={20} />
                      <span>{message}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>

            {/* Decorative glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative max-w-md w-full"
          >
            {/* Gradient border effect */}
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-primary/50 via-accent/50 to-primary/50">
              <div className="bg-background rounded-2xl p-8 text-center">
                {/* Success Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="text-green-500" size={48} />
                </motion.div>

                {/* Success Message */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-bold mb-3 gradient-text"
                >
                  Thank You!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6"
                >
                  Your feedback has been submitted successfully. We truly appreciate your time!
                </motion.p>

                {/* Redirect Message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm text-primary/80 flex items-center justify-center gap-2"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    ⟳
                  </motion.span>
                  Redirecting to home page...
                </motion.p>
              </div>
            </div>

            {/* Decorative glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-green-500/20 to-primary/20 rounded-3xl blur-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Feedback;