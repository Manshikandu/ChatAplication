
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/api/conversation', ConversationRoutes);
app.use('/api/chat', ChatAppRoutes);
app.use('/api/users/', UserChatProfile);
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  ConnectMongoDb();
});
