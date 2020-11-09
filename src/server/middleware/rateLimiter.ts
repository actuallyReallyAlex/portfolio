import rateLimit from "express-rate-limit";

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hrs in milliseconds
  max: 100,
  message: "You have exceeded the limit of requests.",
  headers: true,
});

export default rateLimiter;
