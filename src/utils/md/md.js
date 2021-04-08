import MarkdownIt from 'markdown-it';
import imsize from 'markdown-it-imsize';
import sup from 'markdown-it-sup';
import sub from 'markdown-it-sub';
import mark from 'markdown-it-mark';
import emoji from 'markdown-it-emoji';
import ins from 'markdown-it-ins';
import hljs from 'highlight.js';

export const makeMD = () => new MarkdownIt({
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (e) {
        console.warn(e);
      }
    }
    return '';
  },
})
    .use(imsize)
    .use(sup)
    .use(mark)
    .use(sub)
    .use(ins)
    .use(emoji);
