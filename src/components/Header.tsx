import React, { PureComponent } from 'react';

interface HeaderProps {}

interface HeaderState {}

class Header extends PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="bg-white shadow-sm">
        <div className="flex justify-start items-center p-4 gap-4">
          <a href="/">Главная</a>
          <a href="/about">О нас</a>
          <a href="/blog">Блог</a>
          <a href="/cart">Корзина</a>
          <a href="/message">Сообщение</a>
        </div>
      </div>
    );
  }
}

export default Header;