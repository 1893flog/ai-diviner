# 🔮 AI 塔罗牌占卜网站 - 使用指南

## 项目设置完成 ✅

所有文件已创建，依赖已安装。

### 📋 快速开始

#### 1️⃣ 配置 DeepSeek API 密钥

打开 `.env` 文件，将你的 DeepSeek API 密钥填入：

```
DEEPSEEK_API_KEY=你的_deepseek_api_密钥
PORT=3000
```

**获取 API 密钥**：
- 访问 https://platform.deepseek.com
- 注册账号 → 获取 API 密钥
- 将密钥复制到 `.env` 文件

#### 2️⃣ 启动服务器

在项目目录运行：

```bash
npm start
```

或使用开发模式（支持自动重启）：

```bash
npm run dev
```

#### 3️⃣ 访问应用

打开浏览器访问：
```
http://localhost:3000
```

---

## 🎨 功能特性

✨ **神秘华丽的界面**
- 深紫色主题配金色纹理
- 星空背景动画
- 响应式布局（PC、平板、手机）

🃏 **完整的塔罗占卜体验**
- 78 张完整塔罗牌数据库
- 3D 翻牌动画效果
- 随机正逆位显示

🤖 **AI 智能解读**
- 基于 DeepSeek 大模型
- 针对性的占卜建议
- 神秘诗意的表达

---

## 📁 项目结构

```
ai-diviner/
├── package.json           # 项目配置
├── server.js              # Express 后端服务
├── .env                   # 环境变量（需要配置）
├── .env.example          # 环境变量示例
├── .gitignore            # Git 忽略文件
└── public/               # 前端静态文件
    ├── index.html        # HTML 主页
    ├── styles.css        # 样式文件
    └── script.js         # 交互逻辑
```

---

## 🔧 故障排除

### ❌ 错误：缺少 DeepSeek API 密钥
**解决方案**：
1. 确保 `.env` 文件存在
2. 填入有效的 DEEPSEEK_API_KEY
3. 重启服务器

### ❌ 错误：Port 已被占用
**解决方案**：
在 `.env` 中修改 PORT，例如：
```
PORT=3001
```

### ❌ npm install 失败
**解决方案**：
```bash
# 清除缓存
npm cache clean --force

# 重新安装
npm install
```

---

## 📱 响应式布局

- 📱 **手机**（< 480px）：优化的单列布局，卡牌宽度 80px
- 🖥️ **平板**（480px - 768px）：两列卡牌展示
- 🖥️ **桌面**（> 768px）：三列居中展示

---

## 🚀 部署建议

### 本地运行（开发环境）
```bash
npm start
```

### 生产环境部署
可部署到以下平台：
- **Vercel**：支持 Node.js 无服务函数
- **Railway**：简单易用的 Node.js 部署
- **Render**：提供免费层级
- **阿里云/腾讯云**：国内云服务

---

## 📖 技术栈

- **后端**：Node.js + Express.js
- **前端**：HTML5 + CSS3 + Vanilla JavaScript
- **AI 模型**：DeepSeek Chat API
- **样式**：纯 CSS（无框架依赖）

---

## 🎯 核心功能流程

1. 用户输入问题 → 验证输入
2. 点击"开始占卜" → 禁用按钮
3. 3 张卡牌依次翻转 → 3D 动画效果
4. 显示加载态 → 调用 DeepSeek API
5. 展示占卜解读 → 显示结果
6. 用户可点击"重新占卜" → 重置状态

---

## 📞 需要帮助？

如有问题，检查：
1. ✅ DeepSeek API 密钥是否有效
2. ✅ 网络连接是否正常
3. ✅ Node.js 版本是否 >= 14.0
4. ✅ 浏览器控制台是否有错误信息

**浏览器打开开发者工具**（F12 或 右键 → 检查）查看错误日志。

---

祝你使用愉快！🌟
