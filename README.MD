<img src="https://user-images.githubusercontent.com/218949/144224348-1b3a20d5-d68e-4a7a-b6ac-6946f19f4a86.png" width="198" /> (original author)

## GDPR Cookie Consent banner

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com) [![actions](https://github.com/beyonk-adventures/gdpr-cookie-consent-banner/actions/workflows/publish.yml/badge.svg)](https://github.com/beyonk-adventures/gdpr-cookie-consent-banner/actions/workflows/publish.yml) [![SvelteKit](https://img.shields.io/badge/svelte-kit-orange.svg)](https://kit.svelte.dev) [![Svelte v3](https://img.shields.io/badge/svelte-v3-blueviolet.svg)](https://svelte.dev)

**MLX UPDATE:** I added a simple prop to hide the Cookie Setting button in the notice, useful when only Required Cookies are used.

Contacted the original author re: a pull request, but have not heard back. So this is here so that remote builds in places like Vercel can work, since adding a local package won't cut it for that...

😌🙏

--- original author's text below ---

### What is it?

Svelte implementation of a compliant GDPR banner. It allows the user granular opt-in and out of four different cookie categories.

It now works with SvelteKit without any workarounds!

### What are its features?

* Small, discrete, and non-intrusive
* GDPR Compliant
* Responsive
* Offers four categories
* Runs any function on opting-in
* Runs opted-in functions on each visit
* Changing the choices requires the user to opt-in again.
* Svelte Ready
* No dependencies
* Choices expire yearly
* Optional CSS (with BEM) to bootstrap your cookie message right away
* Modifiable labels and messages

### How do I install it?

#### Via NPM

Simply install the node module into your codebase.

```bash
npm install --save-dev @beyonk/gdpr-cookie-consent-banner
```

### Usage

#### Svelte

Just use it as a regular svelte component:

```svelte
<GdprBanner cookieName="foo" description="bar" on:analytics={initAnalytics} />

<script>
  import '@beyonk/gdpr-cookie-consent-banner/style.css' // optional, you can also define your own styles
  import { Banner as GdprBanner } from '@beyonk/gdpr-cookie-consent-banner'

  function initAnalytics () {
    // do something with segment.io or google analytics etc
  }
</script>
```

### Methods

You can re-call the cookie banner from an external link by binding the component instance and calling `show()` on it.

```svelte
<GdprBanner bind:this={gdprBanner} cookieName="foo" description="bar" on:analytics={initAnalytics} />

<script>
  import { GdprBanner } from '@beyonk/gdpr-cookie-consent-banner'

  let gdprBanner

  gdprBanner.show()
</script>
```

### Props

The defaults are shown below.

It is not possible to opt-out of 'necessary' cookies.

```js
const props = {
  /**
   * You must set the cookie name.
   **/
  cookieName: 'beyonk_gdpr',

  /**
   * The cookie configuration, such as domain and path.
   **/
  cookieConfig: {
    domain: 'example.com',
    path: '/'
  },

  /**
   * These are the top two lines of text on the banner
   * The 'description' field can include html such as links
   **/
  heading: 'GDPR Notice',
  description: 'We use cookies to offer a better browsing experience, analyze site traffic, personalize content, and serve targeted advertisements. Please review our <a href="/privacy-policy">privacy policy page</a>. By clicking accept, you consent to our privacy policy & use of cookies.',

  /**
   * All the button labels and aria-label content.
   **/
  acceptLabel: 'Confirm all',
  rejectLabel: 'Reject all',
  settingsLabel: 'Preferences',
  closeLabel: 'Close window',
  editLabel: 'Edit settings',

  /**
   * These are the default opt-ins and their descriptions.
   * When value is set to true, the option will automatically be checked on load.
   *
   * If you want to hide a category, simply set it to false, e.g. 'marketing: false'
   **/
  choices: {
      necessary: {
          label: "Necessary cookies",
          description: "Used for cookie control. Can't be turned off.",
          value: true
      },
      tracking: {
          label: "Tracking cookies",
          description: "Used for advertising purposes.",
          value: true
      },
      analytics: {
          label: "Analytics cookies",
          description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
          value: true
      },
      marketing: {
          label: "Marketing cookies",
          description: "Used for marketing data.",
          value: true
      }
  },

  /**
   * Show an icon to edit cookies later, when banner is closed.
  **/
  showEditIcon: true,

  /**
   * These are the functions which are run if a user opts-in to that category.
   * You should drop your cookies here (or set a variable to control the later dropping of cookies.
   *
   * If you are using svelte, you can use events instead - see the Svelte section below.
   **/
  categories: {
    analytics: function() {
      console.log('No analytics cookies specified')
    },
    tracking: function() {
      console.log('No tracking cookies specified')
    },
    marketing: function() {
      console.log('No marketing cookies specified')
    },
    necessary: function() {
      console.log('No necessary cookies specified')
    }
  }
}
```
