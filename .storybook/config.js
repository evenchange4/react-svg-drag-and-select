import { configure, addDecorator, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

// addon-info
setDefaults({
  inline: true,
});

const context = require.context('../src/', true, /\.example\.js$/);

setAddon(infoAddon);
setOptions({
  name: 'MCS Lite',
  url: 'https://github.com/MCS-Lite/mcs-lite',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: true,
  sidebarAnimations: true,
});

function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
