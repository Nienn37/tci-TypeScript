import React, { PureComponent } from 'react'

interface FooterProps {}

interface FooterState {}

class Footer extends PureComponent<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);

    this.state = {};
  }

    render() {
        return (
            <footer className="p-4">
                <p>© Copyright 2025 Arkady Co. . All Rights Reserved.</p>
            </footer>
        )
    }
}

export default Footer