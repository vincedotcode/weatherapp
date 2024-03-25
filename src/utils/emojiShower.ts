export const triggerEmojiShower = (): void => {
    const emojis: string[] = ['❤️', '👍'];
    const emojiShowerContainer: HTMLDivElement = document.createElement('div');
    emojiShowerContainer.className = 'emoji-shower-container';
    document.body.appendChild(emojiShowerContainer);
  
    for (let i = 0; i < 30; i++) {
      const emoji: HTMLSpanElement = document.createElement('span');
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.className = 'emoji';
      emoji.style.left = `${Math.random() * 100}%`;
      emoji.style.fontSize = `${Math.random() * 24 + 10}px`;
      emoji.style.animationDuration = `${Math.random() * 2 + 3}s`;
      emojiShowerContainer.appendChild(emoji);
    }
  
    setTimeout(() => {
      emojiShowerContainer.remove();
    }, 4000);
  };
  