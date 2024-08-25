import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      *,
      ::before,
      ::after {
        box-sizing: border-box;
        background-repeat: no-repeat;
      }
      ::before,
      ::after {
        text-decoration: inherit;
        vertical-align: inherit;
      }
      :where(:root) {
        cursor: default;
        line-height: 1.5;
        overflow-wrap: break-word;
        word-break: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
        -webkit-tap-highlight-color: transparent;
        -webkit-text-size-adjust: 100%;
        text-size-adjust: 100%;
      }
      :where(body) {
        margin: 0;
      }
      :where(h1, h2, h3, h4, h5, h6, p, form) {
        margin: 0;
        padding: 0;
      }
      :where(dl, ol, ul) :where(dl, ol, ul) {
        margin: 0;
        padding: 0;
      }
      :where(hr) {
        color: inherit;
        height: 0;
      }
      :where(ol, ul) {
        list-style-type: none;
        padding: 0;
      }
      :where(nav li)::before {
        float: left;
      }
      :where(pre) {
        font-family: monospace, monospace;
        font-size: 1em;
        overflow: auto;
      }
      :where(abbr[title]) {
        text-decoration: underline;
        text-decoration: underline dotted;
      }
      :where(b, strong) {
        font-weight: bolder;
      }
      :where(code, kbd, samp) {
        font-family: monospace, monospace;
        font-size: 1em;
      }
      :where(small) {
        font-size: 80%;
      }
      :where(audio, canvas, iframe, img, svg, video) {
        display: block;
        vertical-align: middle;
      }
      :where(iframe) {
        border-style: none;
      }
      :where(svg:not([fill])) {
        fill: currentColor;
      }
      :where(table) {
        border-collapse: collapse;
        border-color: currentColor;
        text-indent: 0;
      }
      :where(button, input, select) {
        margin: 0;
        border: 0;
        outline: 0;
      }
      :where(button, [type='button' i], [type='reset' i], [type='submit' i]) {
        -webkit-appearance: button;
      }
      :where(fieldset) {
        border: 1px solid #a0a0a0;
      }
      :where(progress) {
        vertical-align: baseline;
      }
      :where(textarea) {
        margin: 0;
        resize: vertical;
      }
      :where([type='search' i]) {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        height: auto;
      }
      ::-webkit-input-placeholder {
        color: inherit;
        opacity: 0.54;
      }
      ::-webkit-search-decoration {
        -webkit-appearance: none;
      }
      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }
      :where(dialog) {
        background-color: #fff;
        border: solid;
        color: #000;
        height: -moz-fit-content;
        height: fit-content;
        left: 0;
        margin: auto;
        padding: 1em;
        position: absolute;
        right: 0;
        width: -moz-fit-content;
        width: fit-content;
      }
      :where(dialog:not([open])) {
        display: none;
      }
      :where(details > summary:first-of-type) {
        display: list-item;
      }
      :where([aria-busy='true' i]) {
        cursor: progress;
      }
      :where([aria-disabled='true' i], [disabled]) {
        cursor: not-allowed;
      }
      :where([aria-hidden='false' i][hidden]) {
        display: initial;
      }
      :where([aria-hidden='false' i][hidden]:not(:focus)) {
        clip: rect(0, 0, 0, 0);
        position: absolute;
      }
    `}
  ></Global>
);

export default GlobalStyles;
