import { html, css, LitElement } from 'lit-element'
import gql from 'graphql-tag'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { client, store, PageView } from '@things-factory/shell'

class PartnerRegister extends connect(store)(PageView) {
  static get properties() {
    return {
      email: String
    }
  }

  render() {
    const email = this.email

    return html`
      <h2>Join the Operato Partner Program</h2>

      <h3>
        Create your free partner account today Everything you need to go from where you are, to where you want to be.
      </h3>

      <form action="/partner/register" accept-charset="utf-8" name="register" method="POST">
        <input type="text" name="name" placeholder="Enter your organization name" .value=${name} />
        <input type="text" name="description" .value=${name} />
        <input type="text" name="subdomain" .value=${subdomain} />
        <input type="email" name="email" placeholder="Enter your email address" .value=${email} />
        <input type="submit" value="join now" />
      </form>
    `
  }

  updated(changes) {
    /*
     * If this page properties are changed, this callback will be invoked.
     * This callback will be called back only when this page is activated.
     */
    if (changes.has('applications')) {
      /* do something */
    }
  }

  stateChanged(state) {
    /*
     * application wide state changed
     *
     */
  }

  /*
   * page lifecycle
   *
   * - pageInitialized(lifecycle)
   * - pageUpdated(changes, lifecycle, changedBefore)
   * - pageDisposed(lifecycle)
   *
   * lifecycle value has
   * - active : this page is activated
   * - page : first path of href
   * - resourceId : second path of href
   * - params : search params object of href
   * - initialized : initialized state of this page
   *
   * you can update lifecycle values, or add custom values
   * by calling this.pageUpdate({ ...values }, force)
   * If lifecycle values changed by this.pageUpdate(...),
   * this.pageUpdated(...) will be called back right after.
   * If you want to invoke this.pageUpdated(...) callback,
   * set force argument to true.
   *
   * you can re-initialize this page
   * by calling this.pageReset().
   * this.pageInitialized(...) followed by this.pageDispose(...) will be invoked
   * by calling this.pageReset().
   *
   * you can invoke this.pageDisposed()
   * by calling this.pageDispose()
   */

  pageInitialized(lifecycle) {
    /*
     * This page is initialized.
     * It's right time to configure of this page.
     *
     * - called before when this page activated first
     * - called when i18next resource is updated (loaded, changed, ..)
     * - called right after this.pageReset()
     */
  }

  async pageUpdated(changes, lifecycle, before) {
    if (this.active) {
      const { email } = lifecycle.params || {}

      this.email = email
      /*
       * this page is activated
       */
    } else {
      /* this page is deactivated */
    }
  }

  pageDisposed(lifecycle) {
    /*
     * This page is disposed.
     * It's right time to release system resources.
     *
     * - called just before (re)pageInitialized
     * - called right after when i18next resource updated (loaded, changed, ..)
     * - called right after this.pageReset()
     * - called right after this.pageDispose()
     */
  }
}

window.customElements.define('partner-register', PartnerRegister)
