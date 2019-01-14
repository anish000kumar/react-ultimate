import React from "react";

export default class Widget extends React.Component {
  constructor() {
    super();
    this.hide = this.hide.bind(this);
  }

  state = {
    data: {},
    isVisible: false
  };

  hide(...args) {
    if (this.props.controller) this.props.controller.hide.call(null, ...args);
  }

  show(...args) {
    if (this.props.controller) this.props.controller.show.call(null, ...args);
  }

  _onWidgetUpdate({ data, isVisible }) {
    this.setState({ data, isVisible });
  }

  componentWillMount() {
    if (this.props.controller)
      this.props.controller.subscribe(this._onWidgetUpdate.bind(this));
  }

  componentWillUnmount() {
    if (this.props.controller)
      this.props.controller.unsubscribe(this._onWidgetUpdate.bind(this));
  }
}
