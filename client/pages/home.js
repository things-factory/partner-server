import { html, css, LitElement } from 'lit-element'
import gql from 'graphql-tag'
import { connect } from 'pwa-helpers/connect-mixin.js'
import '@material/mwc-textfield'
import { client, store, PageView } from '@things-factory/shell'

class PartnersHome extends connect(store)(PageView) {
  static get styles() {
    return [
      css`
        :host {
          background-color: var(--main-section-background-color);
        }
        [message] {
          background-color: rgba(50, 66, 97, 0.8);
          padding: 30px 50px 0 50px;
          color: #fff;
          text-align: center;
          font-size: 20px;
        }
        [message] strong {
          display: block;
          font-size: 2.5rem;
        }
        [message] img {
          width: 550px;
          max-width: 90%;
          display: block;
          margin: auto;
          margin-top: 20px;
        }
        [ticket] {
          display: grid;
          grid-template-columns: 90px 1fr;
          width: 450px;
          margin: auto;
          margin-top: -15px;
        }
        [brand] {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          overflow: hidden;
          background-color: var(--primary-color);
          padding: var(--padding-narrow);
          box-shadow: var(--box-shadow);
          border-right: 4px dotted var(--main-section-background-color);
          text-align: center;
        }
        [brand] img {
          max-width: 90%;
        }
        [ticket] [content] {
          border-radius: 12px;
          background-color: var(--theme-white-color);
          padding: var(--padding-default) var(--padding-default) var(--padding-narrow) var(--padding-wide);
          box-shadow: var(--box-shadow);
        }
        fieldset {
          border: none;
          margin: 0;
          padding: 0;
        }
        legend {
          margin: 0;
          padding: 0;
          font-weight: bold;
          color: var(--legend-color);
          text-transform: uppercase;
        }
        input {
          border: var(--border-dark-color);
          border-radius: var(--border-radius);
          margin: var(--input-margin);
          padding: var(--input-padding);
          font: var(--input-font);
        }
        input[type='text'] {
          min-width: 200px;
        }
        [button-primary] {
          background-color: var(--button-primary-background-color);
          border: var(--button-border);
          border-radius: var(--button-border-radius);
          margin: var(--button-margin);
          padding: var(--button-padding);
          color: var(--button-primary-color);
          font: var(--button-primary-font);
          text-transform: var(--button-text-transform);
          text-decoration: none;
        }
        [button-primary]:hover {
          background-color: var(--button-primary-active-background-color);
          box-shadow: var(--button-active-box-shadow);
        }
        input:focus {
          outline: none;
        }
        @media screen and (max-width: 480px) {
          [message] {
            padding: 20px 30px 0 30px;
            color: #fff;
            text-align: center;
            font-size: 15px;
          }
          [message] strong {
            font-size: 1.6rem;
          }
          [ticket] {
            display: grid;
            grid-template-columns: 70px 1fr;
            width: 90%;
            margin: auto;
            margin-top: -15px;
          }
          input[type='text'] {
            width: calc(100% - 20px);
          }
          [button-primary] {
            width: 100%;
          }
        }
      `
    ]
  }
  static get properties() {
    return {}
  }

  render() {
    return html`
      <div message>
        <strong>Join the Operato Partner Program</strong>
        Create your free partner account today Everything you need to go from where you are, to where you want to be.
        <img src="/assets/images/image-join.png" />
      </div>

      <div ticket>
        <div brand><img src="/assets/manifest/icon-72x72.png" /></div>
        <div content>
          <form action="/partner/register" accept-charset="utf-8" name="register" method="POST">
            <fieldset>
              <legend>operato invite ticket</legend>
              <input type="text" name="email" placeholder="Enter your email address" />
              <input type="submit" value="join now" />
            </fieldset>
          </form>
        </div>
      </div>
    `
  }

  firstUpdated() {
    setTimeout(() => {
      this.renderRoot.querySelector('input[type=text]').focus()
    }, 100)
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

window.customElements.define('partner-home', PartnersHome)
