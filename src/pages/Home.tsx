import React, { PureComponent, ReactNode } from 'react'
import { Button } from '../components/Button.tsx';
import { Input } from '../components/Input.tsx';
import { Text } from '../components/Text.tsx';
import { Helmet } from 'react-helmet';

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <>
                <Helmet>
                    <title>Главная страница</title>
                    <meta name="description" content="Главная страница интернет-магазина" />
                    <meta name="keywords" content="Главная, интернет-магазин, меню, описание" />
                </Helmet>
                <Button size="medium" color="primary" title="Принять" onClick={()=>alert("hello")}/>
                <Text size="large" color="primary" align="left" title="Hello, world!"/>
                <Input size="large" borderColor="primary" placeholder="Hello"/>
            </>
        )
    }
}

export default Home
