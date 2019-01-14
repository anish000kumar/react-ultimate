import React from "react";
import _ from "lodash";

//HOC
export default class Parallax extends React.Component {
  onScrollHandler = _.throttle(this.onScroll, 10).bind(this);
  domNode = React.createRef();

  onScroll() {
    const layer = this.domNode && this.domNode.current;
    const originalSpeed = window.pageYOffset / window.innerHeight;
    // const maxDepth = 20;
    const depth = this.props.distance || 0;

    let speed = depth * originalSpeed;
    speed = this.props.reverse ? -speed : speed;
    layer.style.transform = `scale(${1 -
      speed / 500}) translateY(${speed}px) rotateY(${speed /
      5}deg) rotateX(${speed / 3}deg)`;
  }
  componentDidMount() {
    window.addEventListener("DOMContentLoaded", this.onScrollHandler);
    window.addEventListener("scroll", this.onScrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("DOMContentLoaded", this.onScrollHandler);
    window.removeEventListener("scroll", this.onScrollHandler);
  }

  render() {
    return (
      <div
        style={{
          perspective: "1000px"
        }}
        {...this.props}
      >
        <div
          style={{ boxShadow: "10px 10px 100px 0 rgba(0,0,0,0.1)" }}
          ref={this.domNode}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
