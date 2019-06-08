// app-demo-block

class AppBlock extends HTMLElement {
  get title() {
    return this.getAttribute('title')
  }

  set title(value) {
    this.setAttribute('title', value)
  }

  render() {
    return `
      <div class="app-block">
          <h4 class="app-block-title">${this.title}</h4>
          <div class="app-block-wrap">
            ${this.innerHTML}
          </div>
      </div>
    `
  }

  connectedCallback() {
    // this.insertBefore(this.render(), this.childNodes[0])
    this.innerHTML = this.render()
  }
}

if (!window.customElements.get('app-block')) {
  window.customElements.define('app-block', AppBlock)
}

export default AppBlock
