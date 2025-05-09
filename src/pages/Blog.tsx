import React, { PureComponent, ReactNode } from 'react'
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class Blog extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>
                <Helmet>
                    <title>Блог</title>
                    <meta name="description" content="Страница Блог интернет-магазина" />
                    <meta name="keywords" content="Блог, посты, новсти" />
                </Helmet>
                <h1 className='bg-purple-600'>Blog</h1>
            </div>
            
        )
    }
}

export default Blog
