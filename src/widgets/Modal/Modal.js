import React from "react";
import Widget from "widgets/Widget";
import "./modal.scss";
import controller from "./Controller";

class Modal extends Widget {
  static defaultProps = {
    controller
  };

  render() {
    const { data, isVisible } = this.state;
    const Body = data && data.component;
    const bodyProps = data && data.props;

    return isVisible ? (
      <div className="modal-main">
        <div className="backdrop" />
        <div className="modal">
          {data.header && <div className="modal-header">{data.header}</div>}
          <div className="modal-body">
            <Body {...bodyProps} />
          </div>
          {data.footer && <div className="modal-footer">{data.footer}</div>}
          <button onClick={this.hide}>Close</button>
        </div>
      </div>
    ) : null;
  }
}

export default Modal;
