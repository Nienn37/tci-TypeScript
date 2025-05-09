import React, { PureComponent, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>О нас</title>
                    <meta name="description" content="Страница О нас интернет-магазина" />
                    <meta name="keywords" content="о нас, информация, контакты, почта" />
                </Helmet>
                <h1 className='bg-red-600'>About</h1>
            </div>
        )
    }
}

export default About
