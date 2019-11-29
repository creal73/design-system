/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AkButton {
    'classes': string;
    'label': string;
  }
}

declare global {


  interface HTMLAkButtonElement extends Components.AkButton, HTMLStencilElement {}
  var HTMLAkButtonElement: {
    prototype: HTMLAkButtonElement;
    new (): HTMLAkButtonElement;
  };
  interface HTMLElementTagNameMap {
    'ak-button': HTMLAkButtonElement;
  }
}

declare namespace LocalJSX {
  interface AkButton {
    'classes'?: string;
    'label'?: string;
  }

  interface IntrinsicElements {
    'ak-button': AkButton;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'ak-button': LocalJSX.AkButton & JSXBase.HTMLAttributes<HTMLAkButtonElement>;
    }
  }
}


