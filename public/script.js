// 塔罗牌数据库 - 78 张完整塔罗牌
const tarotCards = [
    // 大阿卡那 (0-21)
    { id: 0, name: '愚者', suit: 'major', meaning: '新的开始，勇气' },
    { id: 1, name: '魔术师', suit: 'major', meaning: '才能，创造力' },
    { id: 2, name: '女祭司', suit: 'major', meaning: '智慧，直觉' },
    { id: 3, name: '皇后', suit: 'major', meaning: '丰富，创意' },
    { id: 4, name: '皇帝', suit: 'major', meaning: '权力，稳定' },
    { id: 5, name: '教皇', suit: 'major', meaning: '传统，信念' },
    { id: 6, name: '恋人', suit: 'major', meaning: '爱情，选择' },
    { id: 7, name: '战车', suit: 'major', meaning: '控制，胜利' },
    { id: 8, name: '力量', suit: 'major', meaning: '内在力量，意志' },
    { id: 9, name: '隐士', suit: 'major', meaning: '内省，寻求' },
    { id: 10, name: '命运之轮', suit: 'major', meaning: '命运，循环' },
    { id: 11, name: '正义', suit: 'major', meaning: '真理，平衡' },
    { id: 12, name: '吊人', suit: 'major', meaning: '牺牲，新视角' },
    { id: 13, name: '死神', suit: 'major', meaning: '变化，转变' },
    { id: 14, name: '节制', suit: 'major', meaning: '平衡，温和' },
    { id: 15, name: '恶魔', suit: 'major', meaning: '欲望，束缚' },
    { id: 16, name: '塔', suit: 'major', meaning: '危机，破坏' },
    { id: 17, name: '星星', suit: 'major', meaning: '希望，灵感' },
    { id: 18, name: '月亮', suit: 'major', meaning: '幻觉，恐惧' },
    { id: 19, name: '太阳', suit: 'major', meaning: '成功，快乐' },
    { id: 20, name: '审判', suit: 'major', meaning: '觉醒，评估' },
    { id: 21, name: '世界', suit: 'major', meaning: '完成，满足' },
    
    // 圣杯 (22-35)
    { id: 22, name: '圣杯王牌', suit: 'cups', meaning: '新的感情' },
    { id: 23, name: '圣杯二', suit: 'cups', meaning: '亲密关系' },
    { id: 24, name: '圣杯三', suit: 'cups', meaning: '庆祝，朋友' },
    { id: 25, name: '圣杯四', suit: 'cups', meaning: '冷漠，拒绝' },
    { id: 26, name: '圣杯五', suit: 'cups', meaning: '失望，悲伤' },
    { id: 27, name: '圣杯六', suit: 'cups', meaning: '怀旧，过去' },
    { id: 28, name: '圣杯七', suit: 'cups', meaning: '选择，幻想' },
    { id: 29, name: '圣杯八', suit: 'cups', meaning: '离开，转移' },
    { id: 30, name: '圣杯九', suit: 'cups', meaning: '满足，成就' },
    { id: 31, name: '圣杯十', suit: 'cups', meaning: '幸福，家庭' },
    { id: 32, name: '圣杯侍者', suit: 'cups', meaning: '敏感，年轻' },
    { id: 33, name: '圣杯骑士', suit: 'cups', meaning: '浪漫，追求' },
    { id: 34, name: '圣杯皇后', suit: 'cups', meaning: '直觉，养育' },
    { id: 35, name: '圣杯国王', suit: 'cups', meaning: '同情，艺术' },
    
    // 权杖 (36-49)
    { id: 36, name: '权杖王牌', suit: 'wands', meaning: '创意，潜力' },
    { id: 37, name: '权杖二', suit: 'wands', meaning: '计划，进展' },
    { id: 38, name: '权杖三', suit: 'wands', meaning: '扩展，合作' },
    { id: 39, name: '权杖四', suit: 'wands', meaning: '庆祝，稳定' },
    { id: 40, name: '权杖五', suit: 'wands', meaning: '竞争，冲突' },
    { id: 41, name: '权杖六', suit: 'wands', meaning: '认可，胜利' },
    { id: 42, name: '权杖七', suit: 'wands', meaning: '坚持，挑战' },
    { id: 43, name: '权杖八', suit: 'wands', meaning: '快速行动，旅程' },
    { id: 44, name: '权杖九', suit: 'wands', meaning: '防守，坚定' },
    { id: 45, name: '权杖十', suit: 'wands', meaning: '负担，压力' },
    { id: 46, name: '权杖侍者', suit: 'wands', meaning: '热情，冒险' },
    { id: 47, name: '权杖骑士', suit: 'wands', meaning: '充满能量，行动' },
    { id: 48, name: '权杖皇后', suit: 'wands', meaning: '魅力，独立' },
    { id: 49, name: '权杖国王', suit: 'wands', meaning: '领导力，热情' },
    
    // 宝剑 (50-63)
    { id: 50, name: '宝剑王牌', suit: 'swords', meaning: '真理，清晰' },
    { id: 51, name: '宝剑二', suit: 'swords', meaning: '选择，平衡' },
    { id: 52, name: '宝剑三', suit: 'swords', meaning: '悲伤，分离' },
    { id: 53, name: '宝剑四', suit: 'swords', meaning: '休息，沉思' },
    { id: 54, name: '宝剑五', suit: 'swords', meaning: '冲突，胜负' },
    { id: 55, name: '宝剑六', suit: 'swords', meaning: '过渡，运动' },
    { id: 56, name: '宝剑七', suit: 'swords', meaning: '欺骗，秘密' },
    { id: 57, name: '宝剑八', suit: 'swords', meaning: '困境，限制' },
    { id: 58, name: '宝剑九', suit: 'swords', meaning: '焦虑，绝望' },
    { id: 59, name: '宝剑十', suit: 'swords', meaning: '结束，悲剧' },
    { id: 60, name: '宝剑侍者', suit: 'swords', meaning: '警惕，谨慎' },
    { id: 61, name: '宝剑骑士', suit: 'swords', meaning: '知识，追求真理' },
    { id: 62, name: '宝剑皇后', suit: 'swords', meaning: '真理，清晰思维' },
    { id: 63, name: '宝剑国王', suit: 'swords', meaning: '权力，权威' },
    
    // 金币 (64-77)
    { id: 64, name: '金币王牌', suit: 'coins', meaning: '财富，机会' },
    { id: 65, name: '金币二', suit: 'coins', meaning: '平衡，多才' },
    { id: 66, name: '金币三', suit: 'coins', meaning: '合作，工作' },
    { id: 67, name: '金币四', suit: 'coins', meaning: '富有，保障' },
    { id: 68, name: '金币五', suit: 'coins', meaning: '困难，损失' },
    { id: 69, name: '金币六', suit: 'coins', meaning: '给予，分享' },
    { id: 70, name: '金币七', suit: 'coins', meaning: '评估，耐心' },
    { id: 71, name: '金币八', suit: 'coins', meaning: '掌握，学习' },
    { id: 72, name: '金币九', suit: 'coins', meaning: '舒适，繁荣' },
    { id: 73, name: '金币十', suit: 'coins', meaning: '财富，家族' },
    { id: 74, name: '金币侍者', suit: 'coins', meaning: '学生，机会' },
    { id: 75, name: '金币骑士', suit: 'coins', meaning: '可靠，勤劳' },
    { id: 76, name: '金币皇后', suit: 'coins', meaning: '慷慨，丰富' },
    { id: 77, name: '金币国王', suit: 'coins', meaning: '财富，权力' }
];

// 状态管理
let isFlipping = false;
let currentCards = [];

// DOM 元素
const questionInput = document.getElementById('question');
const charCount = document.getElementById('charCount');
const divineBtn = document.getElementById('divineBtn');
const cardsContainer = document.querySelector('.cards-container');
const resultSection = document.getElementById('resultSection');
const divinationText = document.getElementById('divinationText');
const loadingDiv = document.getElementById('loading');
const restartBtn = document.getElementById('restartBtn');
const errorModal = document.getElementById('errorModal');
const errorText = document.getElementById('errorText');
const errorCloseBtn = document.getElementById('errorCloseBtn');

// 事件监听器
questionInput.addEventListener('input', updateCharCount);
divineBtn.addEventListener('click', startDivination);
restartBtn.addEventListener('click', resetUI);
errorCloseBtn.addEventListener('click', closeError);

// 更新字数统计
function updateCharCount() {
    charCount.textContent = questionInput.value.length;
}

// 随机选择3张牌
function selectRandomCards() {
    const selected = [];
    const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < 3; i++) {
        const card = shuffled[i];
        const orientation = Math.random() > 0.5 ? 'Upright' : 'Reversed';
        selected.push({
            ...card,
            orientation
        });
    }
    
    return selected;
}

// 开始占卜
async function startDivination() {
    const question = questionInput.value.trim();
    
    if (!question) {
        showError('请输入你的问题');
        return;
    }
    
    if (isFlipping) return;
    
    // 禁用按钮和输入
    divineBtn.disabled = true;
    questionInput.disabled = true;
    isFlipping = true;
    
    // 选择牌并展示结果区
    currentCards = selectRandomCards();
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // 执行翻牌动画
    await flipCards();
    
    // 翻牌完成后调用 API
    await getAIDivination(question);
    
    // 重新启用按钮
    divineBtn.disabled = false;
    questionInput.disabled = false;
    isFlipping = false;
}

// 翻牌动画
async function flipCards() {
    const cards = document.querySelectorAll('.card');
    
    for (let i = 0; i < cards.length; i++) {
        setTimeout(() => {
            cards[i].classList.add('flipped');
            
            // 显示牌名
            const cardName = document.getElementById(`name${i + 1}`);
            cardName.textContent = `${currentCards[i].name} (${currentCards[i].orientation === 'Upright' ? '正位' : '逆位'})`;
        }, i * 300);
    }
    
    // 等待最后一张牌翻完
    await new Promise(resolve => setTimeout(resolve, 900));
}

// 调用 AI 占卜 API
async function getAIDivination(question) {
    try {
        loadingDiv.style.display = 'block';
        divinationText.style.display = 'none';
        
        const response = await fetch('/api/divination', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                question,
                cards: currentCards
            })
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || '占卜失败');
        }
        
        const data = await response.json();
        
        // 显示占卜结果
        loadingDiv.style.display = 'none';
        divinationText.style.display = 'block';
        divinationText.textContent = data.divination;
        
    } catch (error) {
        loadingDiv.style.display = 'none';
        divinationText.style.display = 'block';
        divinationText.textContent = `❌ 错误: ${error.message}`;
        console.error('API 错误:', error);
    }
}

// 重置 UI
function resetUI() {
    // 重置所有牌卡
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, idx) => {
        card.classList.remove('flipped');
        document.getElementById(`name${idx + 1}`).textContent = '';
    });
    
    // 隐藏结果区
    resultSection.style.display = 'none';
    
    // 清空输入
    questionInput.value = '';
    charCount.textContent = '0';
    
    // 滚回顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示错误提示
function showError(message) {
    errorText.textContent = message;
    errorModal.classList.add('show');
}

// 关闭错误提示
function closeError() {
    errorModal.classList.remove('show');
}

// 在页面加载时，预加载塔罗牌卡背景等
document.addEventListener('DOMContentLoaded', () => {
    console.log('🔮 AI 塔罗占卜馆已就绪');
    console.log(`📚 已加载 ${tarotCards.length} 张塔罗牌数据`);
});
