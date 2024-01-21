// // pages/pay/[operator].tsx
// import { useRouter } from 'next/router';
// import { useState } from 'react';
// import styled from 'styled-components';
//
// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 200px;
// `;
//
// const Input = styled.input`
//   margin-bottom: 10px;
// `;
//
// export default function Pay() {
//     const router = useRouter();
//     const { operator } = router.query;
//
//     const [phone, setPhone] = useState('');
//     const [amount, setAmount] = useState('');
//
//     // @ts-ignore
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert(`Оплата ${amount} для ${phone} через ${operator}`);
//     };
//
//     return (
//         <div>
//             <h1>Оплата {operator}</h1>
//             <Form onSubmit={handleSubmit}>
//                 <Input
//                     type="text"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     placeholder="Номер телефона"
//                 />
//                 <Input
//                     type="text"
//                     value={amount}
//                     onChange={(e) => setAmount(e.target.value)}
//                     placeholder="Сумма"
//                 />
//                 <Input type="submit" value="Оплатить" />
//             </Form>
//         </div>
//     );
// }
//
//


// pages/pay/[operator].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

const Input = styled.input`
  margin-bottom: 10px;
`;

export default function Pay() {
    const router = useRouter();
    const { operator } = router.query;

    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Здесь вы можете отправить запрос на сервер
        // const response = await fetch('/api/pay', { method: 'POST', body: JSON.stringify({ operator, phone, amount }) });

        // Предположим, что ответ всегда успешный
        const response = { ok: true };

        setIsLoading(false);

        if (response.ok) {
            setMessage('Оплата прошла успешно!');
            setPhone('');
            setAmount('');
        } else {
            setMessage('Произошла ошибка при оплате.');
        }
    };

    return (
        <div>
            <h1>Оплата {operator}</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Номер телефона"
                    // pattern="^\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$"
                    required
                />
                <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Сумма"
                    min="1"
                    max="1000"
                    required
                />
                <Input type="submit" value={isLoading ? 'Ожидание...' : 'Оплатить'} disabled={isLoading} />
            </Form>
            {message && <p>{message}</p>}
        </div>
    );
}

