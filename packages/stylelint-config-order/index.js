module.exports = {
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        {
          type: 'rule',
          selector: '^%\\w',
        },
        {
          type: 'at-rule',
          name: 'mixin',
        },
        {
          type: 'at-rule',
          name: 'keyframes',
        },
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'declarations',
        {
          type: 'rule',
        },
      ],
      {
        severity: 'warning',
      },
    ],
    'order/properties-order': [
      [
        {
          groupName: 'specials',
          properties: [
            'all',
            'unicode-bidi',
            'direction',
            'orientation',
            'break-before',
            'break-inside',
            'break-after',
            'page-break-before',
            'page-break-inside',
            'page-break-after',
            'content',
          ],
        },
        {
          groupName: 'positioning',
          properties: ['position', 'z-index', 'top', 'right', 'bottom', 'left'],
        },
        {
          groupName: 'display',
          properties: [
            'display',
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'grid',
            'grid-area',
            'grid-template',
            'grid-template-areas',
            'grid-template-rows',
            'grid-template-columns',
            'grid-row',
            'grid-row-start',
            'grid-row-end',
            'grid-column',
            'grid-column-start',
            'grid-column-end',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-gap',
            'grid-row-gap',
            'grid-column-gap',
            'gap',
            'row-gap',
            'columns',
            'column-span',
            'column-width',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-width',
            'column-rule-style',
            'column-rule-color',
            'orphans',
            'widows',
            'vertical-align',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'justify-items',
            'justify-self',
            'order',
          ],
        },
        {
          groupName: 'box',
          properties: [
            'float',
            'clear',
            'box-decoration-break',
            'object-fit',
            'isolation',
            'clip',
            'overflow',
            'overflow-x',
            'overflow-y',
            'overflow-style',
            'overflow-scrolling',
          ],
        },
        {
          groupName: 'box model',
          properties: [
            'box-sizing',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'border',
            'border-spacing',
            'border-collapse',
            'border-width',
            'border-style',
            'border-color',
            'border-top',
            'border-top-width',
            'border-top-style',
            'border-top-color',
            'border-right',
            'border-right-width',
            'border-right-style',
            'border-right-color',
            'border-bottom',
            'border-bottom-width',
            'border-bottom-style',
            'border-bottom-color',
            'border-left',
            'border-left-width',
            'border-left-style',
            'border-left-color',
            'border-image',
            'border-image-source',
            'border-image-slice',
            'border-image-width',
            'border-image-outset',
            'border-image-repeat',
            'border-top-image',
            'border-right-image',
            'border-bottom-image',
            'border-left-image',
            'border-corner-image',
            'border-top-left-image',
            'border-top-right-image',
            'border-bottom-right-image',
            'border-bottom-left-image',
            'border-radius',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-bottom-right-radius',
            'border-bottom-left-radius',
          ],
        },
        {
          groupName: 'table',
          properties: [
            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',
          ],
        },
        {
          groupName: 'typography',
          properties: [
            'font',
            'font-family',
            'font-size',
            'font-style',
            'font-weight',
            'font-variant',
            'font-size-adjust',
            'font-stretch',
            'font-effect',
            'font-emphasize',
            'font-emphasize-position',
            'font-emphasize-style',
            'font-smooth',
            'font-smoothing',
            'font-display',
            'src',
            'hyphens',
            'line-height',
            'text-align',
            'text-align-last',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-style',
            'text-emphasis-position',
            'text-decoration',
            'text-indent',
            'text-justify',
            'text-outline',
            'text-overflow',
            'text-overflow-ellipsis',
            'text-overflow-mode',
            'text-shadow',
            'text-transform',
            'text-wrap',
            'size-adjust',
            'letter-spacing',
            'word-break',
            'word-spacing',
            'word-wrap',
            'overflow-wrap',
            'tab-size',
            'white-space',
            'vertical-align',
            'quotes',
            'counter-reset',
            'counter-increment',
            'list-style',
            'list-style-position',
            'list-style-type',
            'list-style-image',
          ],
        },
        {
          groupName: 'theming',
          properties: [
            'background',
            'background-color',
            'background-image',
            "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
            'filter:progid:DXImageTransform.Microsoft.gradient',
            'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader',
            'filter',
            'background-repeat',
            'background-attachment',
            'background-position',
            'background-position-x',
            'background-position-y',
            'background-clip',
            'background-origin',
            'background-size',
            'background-blend-mode',
            'color',
            'outline',
            'outline-width',
            'outline-style',
            'outline-color',
            'outline-offset',
            'box-shadow',
            'mix-blend-mode',
            'interpolation-mode',
            'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity',
            "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
            'opacity',
          ],
        },
        {
          groupName: 'accessibility & interactions',
          properties: [
            'visibility',
            'pointer-events',
            'tap-highlight-color',
            'touch-action',
            'touch-callout',
            'cursor',
            'resize',
            'user-select',
            'user-zoom',
            'zoom',
            'min-zoom',
            'max-zoom',
            'nav-index',
            'nav-up',
            'nav-right',
            'nav-down',
            'nav-left',
          ],
        },
        {
          groupName: 'SVG Presentation Attribute',
          properties: [
            'alignment-baseline',
            'baseline-shift',
            'dominant-baseline',
            'text-anchor',
            'word-spacing',
            'writing-mode',

            'fill',
            'fill-opacity',
            'fill-rule',
            'stroke',
            'stroke-dasharray',
            'stroke-dashoffset',
            'stroke-linecap',
            'stroke-linejoin',
            'stroke-miterlimit',
            'stroke-opacity',
            'stroke-width',

            'color-interpolation',
            'color-interpolation-filters',
            'color-profile',
            'color-rendering',
            'flood-color',
            'flood-opacity',
            'image-rendering',
            'lighting-color',
            'marker-start',
            'marker-mid',
            'marker-end',
            'mask',
            'shape-rendering',
            'stop-color',
            'stop-opacity',
          ],
        },
        {
          groupName: 'transition & animation',
          properties: [
            'transform',
            'transform-origin',
            'transition',
            'transition-delay',
            'transition-timing-function',
            'transition-duration',
            'transition-property',
            'animation',
            'animation-name',
            'animation-duration',
            'animation-play-state',
            'animation-timing-function',
            'animation-delay',
            'animation-iteration-count',
            'animation-direction',
            'animation-fill-mode',
          ],
        },
      ],
      {
        unspecified: 'bottom',
        severity: 'warning',
      },
    ],
  },
};
