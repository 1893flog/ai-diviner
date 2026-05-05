import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const ALIYUN_API_KEY = process.env.ALIYUN_API_KEY;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

// 占卜 API 端点
app.post('/api/divination', async (req, res) => {
  try {
    const { question, cards } = req.body;

    if (!question || !cards || cards.length !== 3) {
      return res.status(400).json({ error: '请提供有效的问题和3张牌' });
    }

    if (!ALIYUN_API_KEY) {
      return res.status(500).json({ error: '缺少阿里云 API 密钥' });
    }

    // 构建 prompt
    const cardDescriptions = cards
      .map((card, idx) => `第${idx + 1}张: ${card.name} (${card.orientation})`)
      .join('\n');

    const prompt = `你是一位神秘的塔罗牌占卜师。用户提出了以下问题：

问题：${question}

抽取的塔罗牌如下：
${cardDescriptions}

请根据这些牌进行深入而神秘的占卜解读。解读应该：
1. 针对用户的具体问题
2. 融合塔罗牌的象征意义
3. 富有诗意和启发性
4. 长度在200-300字左右

请直接给出解读内容，不要包含前言。`;

    // 调用阿里云通义千问 API
    console.log('📡 调用阿里云 API...');
    console.log('密钥状态:', ALIYUN_API_KEY ? '✓ 已加载' : '✗ 未加载');
    
    const response = await axios.post(
      'https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation',
      {
        model: 'qwen-turbo',
        input: {
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ]
        },
        parameters: {
          temperature: 0.7,
          max_tokens: 500
        }
      },
      {
        headers: {
          'Authorization': `Bearer ${ALIYUN_API_KEY}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000
      }
    );

    const divination = response.data.output.text || response.data.output.choices?.[0]?.message?.content || '占卜结果生成中...';

    res.json({
      success: true,
      divination,
      cards
    });
  } catch (error) {
    console.error('❌ API 错误详情:', error.message);
    if (error.response) {
      console.error('状态码:', error.response.status);
      console.error('响应数据:', JSON.stringify(error.response.data));
    }
    
    let errorMessage = '占卜失败';
    if (error.message.includes('No API-key')) {
      errorMessage = '阿里云 API 密钥未提供或格式不正确';
    } else if (error.response?.status === 401) {
      errorMessage = '阿里云 API 密钥无效或已过期';
    } else if (error.response?.status === 429) {
      errorMessage = '请求过于频繁，请稍后再试';
    } else if (error.response?.status === 500) {
      errorMessage = '阿里云服务器错误，请稍后重试';
    }
    
    res.status(error.response?.status || 500).json({
      error: errorMessage,
      details: error.message
    });
  }
});

// 健康检查
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`🔮 占卜网站运行在 http://localhost:${PORT}`);
});
