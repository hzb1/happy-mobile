
export declare class Button extends HTMLElement {
  color: 'primary' | 'white' | 'green' | 'yellow' | 'red';
  size: 'medium' | 'small' | 'large';
  icon: string;
  loading: boolean;
  outline: boolean;
  disabled: boolean;
  shadow: boolean;
  inline: boolean;
  type: 'button' | 'submit' | 'reset';

  showLoading(): () => void;
  hideLoading(): void;
}
