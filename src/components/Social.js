import { Component } from "react";

class Social extends Component {
  render() {
    return (
      <div class="social">
        <a
          class="btnsame btn1"
          href="https://github.com/mafghal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          class="btnsame btn2"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="btnsame btn3"
          href="https://www.linkedin.com/in/abderrahmane-maftah-0904961a6/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          class="btnsame btn4"
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
    );
  }
}

export default Social;
