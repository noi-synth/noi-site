// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'NOI Synthesizer', // Title for your website.
  tagline: 'NOI is a open-source open-hardware personal portable synthesizer.',
  url: 'https://noi-synth.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // Used for publishing and more
  projectName: 'noi-site',
  organizationName: 'noi-synth',
  headerLinks: [
    { doc: 'index', label: 'Docs' },
  ],
  /* Colors for website */
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#333333',
  },
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
};

module.exports = siteConfig;
