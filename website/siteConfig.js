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
    { doc: 'about/what-is-noi', label: 'Docs' },
  ],
  /* Colors for website */
  colors: {
    primaryColor: '#333',
    secondaryColor: '#000',
  },
  highlight: {
    theme: 'default',
  },
  onPageNav: 'separate',
  cleanUrl: true,
};

module.exports = siteConfig;
