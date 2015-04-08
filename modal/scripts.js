var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Modal = React.createClass({
    render: function() {
        return (
          <div className="modal">
            <h3>My Modal</h3>
            <div className="body">
              <p>This is the modal&apos;s body.</p>
            </div>
            <button onClick={this.props.handleClose}>Close modal</button>
          </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return { isModalOpen: false };
    },

    openModal: function() {
        this.setState({ isModalOpen: true });
    },

    closeModal: function() {
        this.setState({ isModalOpen: false });
    },

    render: function() {
        if(this.state.isModalOpen) {
            var modal = <Modal key="my-modal"
                               handleClose={this.closeModal} />;
        } else {
            var modal = [];
        }

        return (
          <div className="app">
            <h1>App</h1>
            <button onClick={this.openModal}>Open modal</button>
            <ReactCSSTransitionGroup transitionName="modal-anim">
              {modal}
            </ReactCSSTransitionGroup>
          </div>
        );
    }
});

React.render(
    <App/>,
    document.body
);