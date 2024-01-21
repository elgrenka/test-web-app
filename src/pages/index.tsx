// pages/index.tsx
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const operators = ['МТС', 'Билайн', 'Мегафон'];

const OperatorList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OperatorItem = styled.li`
  margin: 10px 0;
`;

export default function Home() {
    return (
        <div>
            <h1>Операторы</h1>
            <OperatorList>
                {operators.map((operator, index) => (
                    <OperatorItem key={index}>
                        <Link href={`/pay/${operator}`}>{operator}</Link>
                    </OperatorItem>
                ))}
            </OperatorList>
        </div>
    );
}


