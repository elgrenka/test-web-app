import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button } from '../styles/StyledComponents';

export default function PaymentForm() {
    const router = useRouter();
    const { operator } = router.query;
    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        // Эмуляция запроса к API
        const success = Math.random() > 0.5;

        if (success) {
            alert('Оплата прошла успешно');
            await router.push('/');
        } else {
            alert('Ошибка при оплате');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <h1>{operator}</h1>

            <Input
                type="tel"
                title="10 цифр (без кода страны)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Номер телефона"
                pattern="^\d{10}$"
                required
            />

            <Input
                type="number"
                title="От 1 до 1000 рублей"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="1"
                max="1000"
                placeholder="Сумма"
                required
            />

            <Button type="submit">Подтвердить</Button>
        </Form>
    );
}
