// import { MDCBanner } from "@material/banner";

// const banner = new MDCBanner(document.querySelector(".mdc-banner"));

export const Banner = () => {
  return (
    <div className="mdc-banner" role="banner">
      <div
        className="mdc-banner__content"
        role="alertdialog"
        aria-live="assertive"
      >
        <div className="mdc-banner__graphic-text-wrapper">
          <div className="mdc-banner__graphic" role="img" alt="">
            <i className="material-icons mdc-banner__icon">error_outline</i>
          </div>
          <div className="mdc-banner__text">
            There was a problem processing a transaction on your credit card.
          </div>
        </div>
        <div className="mdc-banner__actions">
          <button
            type="button"
            className="mdc-button mdc-banner__primary-action"
          >
            <div className="mdc-button__ripple"></div>
            <div className="mdc-button__label">Fix it</div>
          </button>
        </div>
      </div>
    </div>
  );
};
