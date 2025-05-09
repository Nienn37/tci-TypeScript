import React, { ReactNode, useEffect, useState } from "react";
import { Button } from "../components/Button.tsx";
import axios from "axios";
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Корзина</title>
                <meta name="description" content="Список товаров в корзине" />
                <meta name="keywords" content="Корзина, товары, покупка" />
            </Helmet>
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
};

const Cart = () => {
    const [goods, setGoods] = useState<Good[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGood, setNewGood] = useState<Good>({ title: '', description: '', price: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newValue = name === 'price' ? parseFloat(value) : value;
        setNewGood({ ...newGood, [name]: newValue });
    };

    useEffect(() => {
        const fetchGoods = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/data");
                setGoods(response.data);
            } catch (error) {
                alert("Ошибка при загрузке продуктов: " + error);
            }
        };
        fetchGoods();
    }, []);

    const handleAddGood = async () => {
        if (newGood.title && newGood.description && newGood.price) {
            try {
                const response = await axios.post("http://localhost:5000/api/data", newGood);
                setGoods([...goods, newGood]);
                setNewGood({ title: '', description: '', price: '' });
                setIsModalOpen(false);
            } catch (error) {
                alert("Ошибка при добавлении продукта: " + error);
            }
        } else {
            alert("Пожалуйста, заполните все поля");
        }
    };

    return (
        <>
            <div className="flex flex-col gap-4 items-start">
                {!isModalOpen && (
                    <Button color="primary" size="large" title="Добавить товар" onClick={() => setIsModalOpen(true)} />
                )}

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
                        <div className="flex gap-3">
                            <Button color="primary" size="large" title="Добавить" onClick={handleAddGood} />
                            <Button color="primary" size="large" title="Закрыть" onClick={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                )}

                <GoodsList goods={goods} />
            </div>
        </>
    );
};

export default Cart;
