import Controller from "../BaseController";

class ModalController extends Controller {
  setHeader(header) {
    this.data.header = header;
  }
  setFooter(footer) {
    this.data.footer = footer;
  }
  show(component, props) {
    this.data.component = component;
    this.data.props = props;
    super.show();
  }
}

let modalController = new ModalController({
  data: {
    header: null,
    component: null,
    props: null,
    footer: null
  },
  timeOut: 0,
  onClose: () => {}
});

export default modalController;
