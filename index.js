import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Zoom from './node_modules/reveal.js/plugin/zoom/zoom.esm.js';
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
  plugins: [Zoom, Highlight],
});

deck.initialize();
