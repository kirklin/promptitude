// 对话接口
// Conversation interface
export interface Conversation {
  // 用户发出的消息
  // User's message
  user: string;
  // 机器人的回复
  // Bot's reply
  bot: string;
}

// Prompt 接口
// Prompt interface
export interface Prompt {
  // 语言，使用ISO 639-1 2-letter code
  // Language, using the ISO 639-1 2-letter code
  language: string;
  // 类别，比如环境、情感、小说等等
  // Category, such as environment, emotion, novel, etc.
  category: string;
  // 标签，用于更好的分类和搜索
  // Tags, used for better categorization and search
  tags: string[];
  // 描述，对prompt进行简要描述
  // Description, briefly describing the prompt
  description: string;
  // Prompt, 是一条聊天信息，用于训练ChatGPT
  // Prompt, a piece of chat message used to train ChatGPT
  prompt: string;
  // 模拟对话，包括用户发送的消息和机器人的回复
  // Simulated conversation including user's message and bot's reply
  conversations: Conversation[];
}
