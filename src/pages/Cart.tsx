import React, { ReactNode, useEffect, useState } from "react";
import { Component } from "react";
import {Button} from "../components/Button.tsx"
import { useAsyncError } from "react-router-dom";

export default class Cart extends Component {
    render() {
        return <Counter/>;
    }
}
interface Good {
    title: string;
    description: string;
    price: string;
  }

  interface GoodsListProps {
    goods: Good[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
    return (
        <div>
            <b><h2>Список товаров: </h2></b>
            <ul className="flex flex-col gap-5">
                {goods.map((good, index) => (
                <li key={index}>
                    <p>Название: {good.title}</p>
                    <p>Описание: {good.description}</p>
                    <p>Цена: {good.price} руб.</p>
                </li>
                ))}
            </ul>
        </div>
      );
}

const Counter = () => {
    // const [count, setCount] = useState<number>(0);
    //const [name, setName] = useState("");
    // const [isVisible, setIsVisible] = useState(true);
    //const [items, setItems] = useState([""]);
    //const [newElement, setNewElement] = useState("");
    // const [user, setUser] = useState({name:"Иван", age:30});
    const [goods, setGoods] = useState<Good[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGood, setNewGood] = useState<Good>({title: '', description: '', price: ''});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Convert price to a number if the name is "price"
        const newValue = name === 'price' ? parseFloat(value) : value;

        setNewGood({ ...newGood, [name]: newValue });
    };

    const handleAddGood = () => {
        if (newGood.title && newGood.description && newGood.price) {
            setGoods([...goods, newGood]);
            setNewGood({ title: '', description: '', price: '' });
            setIsModalOpen(false);
          } else {
            alert("Пожалуйста, заполните все поля");
          }
    };

    return (
        <>
            <div className="flex felx-col gap-4 items-center justify-center"/>
                <div>
                <Button color="primary" size="large" title="Добавить товар" onClick={() => setIsModalOpen(true)}/>
                
                {isModalOpen && (
                    <div className="modal">
                    <h2>Добавить новый товар</h2>
                    <input
                        type="text"
                        name="title"
                        placeholder="Название"
                        value={newGood.title}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Описание"
                        value={newGood.description}
                        onChange={handleInputChange}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={newGood.price}
                        onChange={handleInputChange}
                    />
                    <Button color="primary" size="large" title="Добавить" onClick={handleAddGood}/>
                    <Button color="primary" size="large" title="Закрыть" onClick={() => setIsModalOpen(false)}/>
                    </div>
                )}

                <GoodsList goods={goods} />
            </div>
        </>
    )
}