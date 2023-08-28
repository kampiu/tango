/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  designer: [
    'intro',
    'designer/quick-start',
    {
      type: 'category',
      label: '模块',
      items: [
        'designer/modules/designer',
        'designer/modules/designer-panel',
        'designer/modules/sidebar-panel',
        'designer/modules/setting-panel',
        'designer/modules/workspace-panel',
        'designer/modules/view-panel',
        'designer/modules/sandbox',
        'designer/modules/hooks',
      ],
    },
    {
      type: 'category',
      label: '扩展',
      items: ['designer/extend/overview', 'designer/extend/remote-service'],
    },
    'designer/setters',
  ],

  boot: [
    'boot/intro',
    'boot/app-spec',
    'boot/tango-config',
    'boot/app-json',
    'boot/config',
    'boot/app',
    'boot/service',
    'boot/store',
    'boot/page',
    'boot/global',
    'boot/helpers',
    'boot/model',
    'boot/ref',
    'boot/i18n',
  ],

  protocol: ['protocol/material-protocol', 'protocol/material-package-spec'],
};

module.exports = sidebars;
