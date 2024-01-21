import React from 'react';
import { useRouter } from 'next/router';
import { Button } from '../styles/StyledComponents';

const operators = ['МТС', 'Билайн', 'Мегафон'];

export default function Operators() {
    const router = useRouter();

    return (
        <div>
            {operators.map((operator, index) => (
                <Button key={index} onClick={() => router.push(`/payment/${operator}`)}>
                    {operator}
                </Button>
            ))}
        </div>
    );
}
