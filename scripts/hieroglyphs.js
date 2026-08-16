/* ============================================
   EGYPTIAN MUSEUM - Hieroglyphs Page
   Text-to-hieroglyph translator.
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ---- Hieroglyph Translator ----
  window.hieroglyphMap = {
    'a': '𓄿', 'b': '𓃀', 'c': '𓍿', 'd': '𓂧', 'e': '𓇋',
    'f': '𓆑', 'g': '𓎼', 'h': '𓎛', 'i': '𓇋', 'j': '𓆓',
    'k': '𓎡', 'l': '𓃭', 'm': '𓅓', 'n': '𓈖', 'o': '𓍯',
    'p': '𓊪', 'q': '𓈎', 'r': '𓂋', 's': '𓋴', 't': '𓏏',
    'u': '𓅱', 'v': '𓆑', 'w': '𓅱', 'x': '𓎡', 'y': '𓇌', 'z': '𓊃',
    ' ': ' ', '.': '𓏤', '!': '𓀀', '?': '𓁹',
    'sun': '𓇳', 'water': '𓈗', 'eye': '𓁹', 'life': '𓋹',
    'king': '𓀭', 'god': '𓀭', 'love': '𓃭', 'house': '𓉐',
    'bird': '𓅭', 'cat': '𓃠', 'snake': '𓆓', 'fish': '𓆛',
    'tree': '𓆭', 'star': '𓇼', 'moon': '𓇹', 'mountain': '𓈋',
    'pharaoh': '𓀭', 'egypt': '𓂋', 'nile': '𓈗', 'pyramid': '𓉐',
    'gold': '𓋞', 'eternity': '𓋹', 'soul': '𓅓', 'power': '𓃭'
  };

  window.translateToHieroglyphs = function(text) {
    const lower = text.toLowerCase().trim();
    const words = lower.split(/\s+/);
    let result = '';
    for (const word of words) {
      if (window.hieroglyphMap[word]) {
        result += window.hieroglyphMap[word] + ' ';
      } else {
        for (const char of word) {
          result += (window.hieroglyphMap[char] || char) + '';
        }
        result += ' ';
      }
    }
    return result.trim() || '𓁹';
  };

  // Bind translator if present
  const transInput = document.getElementById('translator-input');
  const transOutput = document.getElementById('translator-output');
  const transBtn = document.getElementById('translator-btn');
  if (transInput && transOutput) {
    const doTranslate = () => {
      transOutput.textContent = window.translateToHieroglyphs(transInput.value);
    };
    transBtn?.addEventListener('click', doTranslate);
    transInput.addEventListener('input', doTranslate);
  }
});
