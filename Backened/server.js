import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import abstractRoutes from './routes/abstractRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'

const app = express();
const PORT = 3001
// Middleware
app.use(express.json());
app.use(cookieParser())
app.use(cors(
  {
    origin: "/*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
));

// Database Connection


// Routes
app.use('/api/abstracts', abstractRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes)

// Server Setup
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
