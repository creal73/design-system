import { Component, Prop, Host, h } from "@stencil/core";

@Component({
  tag: "ak-button",
  styleUrl: "button.css",
  shadow: true
})
export class Button {
  @Prop() label: string;

  @Prop() classes: string;

  render() {
    return (
      <Host>
        <div class={this.classes}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
